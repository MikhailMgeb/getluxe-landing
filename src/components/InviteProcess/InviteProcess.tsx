'use client'
import BonusSuccess from '@/components/BonusSuccess/BonusSuccess'
import InviteCard from '@/components/InviteCard/InviteCard'
import InviteStep from '@/components/InviteStep/InviteStep'
import SMSVerification from '@/components/SMSVerification/SMSVerification'
import { useSearchParams } from 'next/navigation'
import React, { MouseEvent, useEffect, useState } from 'react'

import styles from './InviteProcess.module.css'

export type StateType = {
	phone: string;
	smsCode: string;
	referredId: string;
	fio: string;
	promoCode: string;
};

export default function InviteProcess() {
	const [step, setStep] = useState(1)
	
	const [formData, setFormData] = useState<StateType>({
		phone: '+7',
		smsCode: '',
		referredId: '',
		fio: '',
		promoCode: ''
	})
	
	const searchParams = useSearchParams()
	
	useEffect(() => {
		const referredIdFromUrl = searchParams.get('referredId')
		if (referredIdFromUrl) {
			setFormData((prev) => ({
				...prev,
				referredId: referredIdFromUrl
			}))
		}
	}, [searchParams])
	
	const nextStep = () => setStep(step + 1)
	const prevStep = () => setStep(step - 1)
	
	const updateFormData = (key: keyof StateType, value: string) => {
		setFormData((prev) => ({
			...prev,
			[key]: value
		}))
	}
	
	const onHandSendCode = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		
		const cleanedValue = formData?.phone.replace(/[^\d+]/g, '').replace(/(?!^\+)\+/g, '')
		const formattedPhone = cleanedValue?.startsWith('+')
			? cleanedValue
			: `+${cleanedValue}`
		
		try {
			const res = await fetch('https://api-dev.getluxe.ru/api/auth/customer-send-sms', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ phone: formattedPhone })
			})
			
			if (!res.ok) {
				throw new Error(`Ошибка: ${res.status} ${res.statusText}`)
			}
			
			const data = await res.json()
			
			if (step === 1) {
				nextStep()
			}
			return data
		} catch (error) {
			console.error('Ошибка при отправке SMS:', error)
			throw error
		}
	}
	
	return (
		<section className={styles.container}>
			{step !== 3 && <InviteCard />}
			<div className={styles.inviteStepContainer}>
				{step === 1 && (
					<InviteStep
						formData={formData}
						onHandSendCode={onHandSendCode}
						updateFormData={updateFormData}
					/>
				)}
				{step === 2 && (
					<SMSVerification
						formData={formData}
						onNextAction={nextStep}
						onBackAction={prevStep}
						onUpdateFormDataAction={updateFormData}
						onHandSendCodeAction={onHandSendCode}
					/>
				)}
				{step === 3 && <BonusSuccess />}
			</div>
		</section>
	)
}


