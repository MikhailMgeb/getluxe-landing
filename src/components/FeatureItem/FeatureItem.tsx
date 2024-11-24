import React from 'react';
import styles from './FeatureItem.module.css';

type TProps = { number: string; title: string; description: string }


export default function FeatureItem ({ number, title, description }: TProps) {
	return (
		<>
		
		<div className={styles.wrapperFeatureNumber}>
			<div className={styles.featureNumber}>{number}</div>
		</div>
	<div className={styles.featureItem}>
		<div className={styles.content}>
			<h4 className={styles.featureTitle}>{title}</h4>
				<p className={styles.featureDescription}>{description}</p>
			</div>
		</div>
		</>
	);
};