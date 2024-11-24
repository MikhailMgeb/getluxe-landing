import DownloadButtons from '@/components/DownloadButtons/DownloadButtons'
import Image from 'next/image';
import styles from './DownloadSection.module.css';

export default function DownloadSection() {
	return (
		<section className={styles.downloadSection}>
			<div className={styles.container}>
				<div className={styles.images}>
					<Image src="/device.png" alt="Google Play" width={385} height={360} />
					<Image src="/device-2.png" alt="App Store" width={730} height={360} />
				</div>
				<div className={styles.textContent}>
					<h2 className={styles.title}>
						СКАЧАЙТЕ GETLUXE И НАЧНИТЕ СВОЁ ИДЕАЛЬНОЕ ПУТЕШЕСТВИЕ УЖЕ СЕЙЧАС!
					</h2>
					<DownloadButtons />
				</div>
			</div>
		</section>
	);
};