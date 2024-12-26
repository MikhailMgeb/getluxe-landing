import React from 'react'
import styles from './FeatureItem.module.css'

type TProps = { number: string; title: string; description: string, urlImage: string }


export default function FeatureItem({ number, title, description, urlImage }: TProps) {
	return (
		<div className={styles.featureItem}>
			<div className={styles.featureItemContainer}>
				<div className={styles.wrapperFeatureNumber}>
					<div className={styles.featureNumber}>{number}</div>
				</div>
				<div className={styles.description}>
					<div className={styles.content}>
						<h4 className={styles.featureTitle}>{title}</h4>
						<p className={styles.featureDescription}>{description}</p>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img className={styles.imagePhone} src={urlImage} alt='Приложение GETLUXE' />
			</div>
		</div>
	)
};