import Link from 'next/link'
import React from "react";
import Image from "next/image";
import styles from "./DownloadButtons.module.css";

export default function DownloadButtons ()  {
	return (
		<div className={styles.downloadButtons}>
			<Link
				href='#'
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
					<span className={styles.text}>GET IT ON</span>
					<span className={styles.text}>Google Play</span>
				</div>
			</Link>
			<Link
				href="#"
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
					<span className={styles.text}>Download on the</span>
					<span className={styles.text}>App Store</span>
				</div>
			</Link>
		</div>
	);
};
