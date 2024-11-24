import Link from 'next/link'
import React from 'react';
import styles from './Footer.module.css';

export default function Footer()   {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoSection}>
					<Link href="/">
						<img src={'/logo-header.svg'} alt={'logo'} />
					</Link>
					<p className={styles.sectionText}>
						Ваш персональный помощник для путешествий. Премиум-сервис, профессиональные
						суперкейсы и эксклюзивные комьюнити для тех, кто ценит комфорт и стиль.
					</p>
				</div>
				
				<div className={styles.containerNavigation}>
				<h3 className={styles.NavigationTitle}>Навигация</h3>
				<div className={styles.linksSection}>
					<div>
						<ul className={styles.footerList}>
							<li><Link className={styles.footerNavLink} href='#'>Ссылка 1</Link></li>
							<li><Link className={styles.footerNavLink} href='#'>Ссылка 2</Link></li>
							<li><Link className={styles.footerNavLink} href='#'>Ссылка 3</Link></li>
						</ul>
					</div>
					<div>
						<ul className={styles.footerList}>
							<li><Link className={styles.footerNavLink} href='#'>Реферальная система</Link></li>
							<li><Link className={styles.footerNavLink} href='#'>Партнерам</Link></li>
							<li><Link className={styles.footerNavLink} href='#'>Ссылка 1</Link></li>
						</ul>
					</div>
				</div>
				</div>
				
				<div className={styles.contactSection}>
					<div className={styles.contactDetails}>
						<p className={styles.phoneNumber}>+7 987 654 32 11</p>
						<p className={styles.contactCenter}>Контактный центр</p>
					</div>
					<div className={styles.socialIcons}>
						<Link href='#'><img src='/icons/vk-icon.svg' alt='vk' /></Link>
						<Link href='#'><img src='/icons/whatsapp-icon.svg' alt='whatsapp' /></Link>
						<Link href='#'><img src='/icons/telegram-icon.svg' alt='telegram' /></Link>
					</div>
				</div>
			</div>
		</div>
	);
};