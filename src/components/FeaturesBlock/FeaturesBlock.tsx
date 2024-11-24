import FeatureItem from '@/components/FeatureItem/FeatureItem'
import { features } from '@/constants/features'
import React from 'react';
import styles from './FeaturesBlock.module.css';

export default function FeaturesBlock() {
	return (
		<section className={styles.featuresBlock}>
			<div className={styles.textContent}>
				<p className={styles.subtitle}>Почему выбирают GETLUXE</p>
				<h2 className={styles.title}>
					Каждое путешествие под нашим контролем, чтобы вы могли наслаждаться каждой минутой
				</h2>
				<button className={styles.ctaButton}>Начать путешествие</button>
			</div>
			<div className={styles.imageContainer}>
				<img src="/iPhone.png" alt="Приложение GETLUXE" />
			</div>
			<div className={styles.featuresList}>
				{features.map((feature) => (
					<FeatureItem
						key={feature.number}
						number={feature.number}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
}
