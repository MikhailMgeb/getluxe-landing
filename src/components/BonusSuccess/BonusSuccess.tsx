import DownloadButtons from '@/components/DownloadButtons/DownloadButtons'
import Image from 'next/image';
import styles from './BonusSuccess.module.css';

export default function BonusSuccess() {
	return (
		<section >
			<div className={styles.container}>
				<div className={styles.BonusSuccess}>
					<div className={styles.textContent}>
						<div className={styles.textContentContainer}>
							<p className={styles.textSubtitle}>
								Ура! Бонус теперь у Вас
							</p>
							<p className={styles.textDescription}>
								Качай приложение и бронируй поездку!
							</p>
						</div>
						<div>
							<h2 className={styles.title}>
								Скачайте GETLUXE и начните свое идеальное путешествие уже сейчас!
							</h2>
							<DownloadButtons />
						</div>
					</div>
					<div className={styles.images}>
						<Image className={styles.imagesDeviceFirst} src='/device.png' alt='Google Play' width={385} height={360} />
						<Image className={styles.imagesDeviceSecond} src="/device-2.png" alt="App Store" width={730} height={360} />
					</div>
				</div>
			</div>
		</section>
	);
};