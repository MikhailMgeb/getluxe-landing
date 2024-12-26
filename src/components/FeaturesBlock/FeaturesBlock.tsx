'use client'
import FeatureItem from '@/components/FeatureItem/FeatureItem'
import { features } from '@/constants/features'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './FeaturesBlock.module.css'

export default function FeaturesBlock() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)
	
	return (
		<section className={styles.featuresBlock}>
			<div className={styles.textContent}>
				<p className={styles.subtitle}>Почему выбирают GETLUXE</p>
				<h2 className={styles.title}>
					Каждое путешествие под нашим контролем, чтобы вы могли наслаждаться каждой минутой
				</h2>
				<button className={styles.ctaButton}>Начать путешествие</button>
			</div>
			
			<div className={styles.featuresList}>
				{features.map((feature, index) => {
					const { ref, inView } = useInView({
						threshold: 1,
						triggerOnce: false
					})
					
					useEffect(() => {
						if (inView) {
							setActiveIndex(index)
						}
					}, [inView, index])
					
					return (
						<div
							key={feature.number}
							ref={ref}
							className={`${styles.featureItemWrapper} ${
								index === activeIndex ? styles.active : styles.hidden
							}`}
						>
							<FeatureItem
								number={feature.number}
								title={feature.title}
								description={feature.description}
								urlImage={feature.url}
							/>
						</div>
					)
				})}
			</div>
		</section>
	)
}
