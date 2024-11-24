import Link from 'next/link';
import styles from './header.module.css';

export default function Header () {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<div className={styles.logo}>
					<Link href="/">
						<img src={'/logo-header.svg'} alt={'logo'} />
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li>
							<Link href="/partner">
								Партнерам
							</Link>
						</li>
						<li>
							<Link href="/client">
								Реферальная программа
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<button>
					<img src={'/icons/menu-icon.svg'} alt={'menu-icons'} />
				</button>
			</div>
		</header>
	);
};
