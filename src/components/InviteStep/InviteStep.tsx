import type { StateType } from '@/components/InviteProcess/InviteProcess'
import React, { ChangeEvent, MouseEvent } from 'react'
import styles from './InviteStep.module.css'

type TProps = {
	onHandSendCode: (event: MouseEvent<HTMLButtonElement>) => void,
	updateFormData: (key: keyof StateType, value: string) => void,
	formData?: StateType
}

export default function InviteStep({ onHandSendCode, formData, updateFormData }: TProps) {
	const [checked, setChecked] = React.useState<boolean>(false)
	
	const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}
	
	const handleChange = (key: keyof StateType) => (event: ChangeEvent<HTMLInputElement>) => {
		updateFormData(key, event.target.value)
	}
	
	return (
		<div className={styles.formContainer}>
			<h2 className={styles.heading}>Осталось лишь заполнить форму</h2>
			<form className={styles.form}>
				<div className={styles.formGroup}>
					<label htmlFor='name'>Как вас зовут?</label>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='Ваше ФИО'
						className={styles.input}
						onChange={handleChange('fio')}
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='phone'>Ваш телефон</label>
					<div className={styles.phoneInput}>
						<input
							type='phone'
							id='phone'
							name='phone'
							placeholder='+7 (987) 654 32 11'
							className={styles.input}
							value={formData?.phone}
							onChange={handleChange('phone')}
						/>
					</div>
				</div>
				<button className={`${styles.btn} ${!checked ? styles.checked : ''}`}  disabled={!checked} onClick={onHandSendCode}>
					Продолжить
				</button>
				<div className={styles.confirmationsBlock}>
					<div>
						<div className={styles.checkboxConfirmations}>
							<input type='checkbox' id='checkbox' onChange={handleChangeCheckbox}/>
							<label htmlFor='checkbox'></label>
						</div>
					</div>
					<div>
						<p className={styles.agreement}>
							Нажимая кнопку "Продолжить", я даю согласие
							на{' '}
							<a href='#' className={styles.link}>
								обработку своих персональных данных
							</a>{' '}
							в соответствии с Условиями.
						</p>
					</div>
				</div>
			</form>
		</div>
	
	)
};