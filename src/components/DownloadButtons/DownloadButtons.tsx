import Link from 'next/link'
import React from "react";
import Image from "next/image";
import styles from "./DownloadButtons.module.css";

export default function DownloadButtons ()  {
	return (
		<div className={styles.downloadButtons}>
			<Link
				href='https://play.google.com/store/apps/details?id=com.getluxe.getluxe&pcampaignid=web_share'
				target='_blank'
				rel='noopener noreferrer'
				className={styles.button}
			>
				<Image
					src='/icons/playstore-icon.svg'
					alt='Download on the App Store'
					width={25}
					height={28}
				/>
				<div className={styles.buttonText}>
					<span className={styles.buttonDescription}>GET IT ON</span>
					<span className={styles.buttonDescription}>Google Play</span>
				</div>
			</Link>
			<Link
				href="https://apps.apple.com/ar/app/getluxe/id6450873603"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.button}
			>
				<Image
					src="/icons/apple-icon.svg"
					alt="Get it on Google Play"
					width={24}
					height={28}
				/>
				<div className={styles.buttonText}>
					<span className={styles.buttonDescription}>Download on the</span>
					<span className={styles.buttonDescription}>App Store</span>
				</div>
			</Link>
		</div>
	);
};
