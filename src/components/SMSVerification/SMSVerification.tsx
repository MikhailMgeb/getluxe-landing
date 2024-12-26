"use client";
import type { StateType } from "@/components/InviteProcess/InviteProcess";
import React, { useState, useRef, useEffect, MouseEvent } from 'react'
import styles from "./SMSVerification.module.css";

type TProps = {
	onNextAction: () => void;
	onBackAction: () => void;
	formData?: StateType;
	onUpdateFormDataAction: (key: keyof StateType, value: string) => void;
	onHandSendCodeAction: (event: MouseEvent<HTMLButtonElement>) => void,
};

export default function SMSVerification({ onNextAction, onBackAction, formData, onUpdateFormDataAction,onHandSendCodeAction }: TProps) {
	const [code, setCode] = useState<string[]>(Array(4).fill(""));
	const [timer, setTimer] = useState(60);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
	const [responseErrorText, setResponseErrorText ] = useState<string | undefined>()
	
	useEffect(() => {
		const countdown = setInterval(() => {
			setTimer((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		
		return () => clearInterval(countdown);
	}, []);
	
	const isCodeComplete = code.every((digit) => digit !== "");
	
	const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, "");
		
		setCode((prev) => {
			const newCode = [...prev];
			newCode[index] = value;
			return newCode;
		});
		
		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
	};
	
	const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace" && code[index] === "") {
			if (index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		}
	};
	
	const handleRegisterUser = async () => {
		const finalCode = code.join("");
		onUpdateFormDataAction('smsCode', finalCode);
		
		try {
			const response = await fetch('https://api-dev.getluxe.ru/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			
			if (data.statusCode === 409) {
				setResponseErrorText(`Ошибка: номер уже зарегестрирован`);
			}
			
			if(data.statusCode === 200) {
				onNextAction();
			}

		} catch (error) {
			console.error('Ошибка при регистрации:', error);
			throw error;
		}
	}
	
	const handleRepeatCode = (event: MouseEvent<HTMLButtonElement>) => {
		if(timer === 0) {
			setTimer(60)
			onHandSendCodeAction(event)
		}
	}
	
	
	const isValid = (!isCodeComplete || code.length !== 4)
	
	return (
		<div className={styles.step}>
			<h3 className={styles.textSendCode}>Введите код из СМС</h3>
			<p>
				Код отправлен на указанный вами телефон <span className={styles.textPhone}>{formData?.phone}</span>, введите его в поле ниже
			</p>
			<div className={styles.codeContainer}>
				{code.map((digit, index) => (
					<input
						key={index}
						type="text"
						maxLength={1}
						className={styles.codeInput}
						value={digit}
						onChange={handleChange(index)}
						onKeyDown={handleKeyDown(index)}
						ref={(el: HTMLInputElement | null) => {
							inputRefs.current[index] = el;
						}}
					/>
				))}
			</div>
			{responseErrorText && (
				<p className={styles.responseErrorText}>
					{responseErrorText}
				</p>
			)}
			<button className={styles.timer} onClick={handleRepeatCode}>
				{timer > 0 ? `Запросить новый код (через ${timer} секунд)` : "Запросить новый код"}
			</button>
			<div className={styles.buttons}>
				<button className={`${styles.btn} ${!isValid ? styles.isValid : ''}`} onClick={handleRegisterUser} disabled={!isCodeComplete || code.length !== 4}>
					Подтвердить
				</button>
				<button className={styles.btnStepBack} onClick={onBackAction}>
					Вернуться назад
				</button>
			</div>
		</div>
	);
}
