import styles from './HeroSection.module.css';

export default function HeroSection ()   {
	return (
		<section className={styles.heroSection}>
			<div className={styles.container}>
				{/* Верхний ряд блоков */}
				<div className={styles.features}>
					<div className={styles.feature}>
						<h2 className={styles.featureSubTitle}>Эксклюзивные мероприятия</h2>
						<p className={styles.featureDescription}>Участвуйте в закрытых встречах и событиях для членов сообщества</p>
					</div>
					<div className={styles.feature}>
						<h2 className={styles.featureSubTitle}>Привилегии от партнеров</h2>
						<p className={styles.featureDescription}>Получайте скидки и бонусы от премиум-партнеров по всему миру</p>
					</div>
					<div className={styles.feature}>
						<h2 className={styles.featureSubTitle}>Нетворкинг</h2>
						<p className={styles.featureDescription}>Заводите полезные знакомства с другими предпринимателями и путешественниками</p>
					</div>
				</div>
				
				<div className={styles.mainContent}>
					<p className={styles.subtitle}>Комьюнити GETLUXE — путешествуйте с единомышленниками</p>
					<h1 className={styles.title}>
						Присоединяйтесь к сети предпринимателей и путешественников, которые ценят комфорт, стиль и новые возможности
					</h1>
					<button className={styles.button}>Начать путешествие</button>
				</div>
			</div>
		</section>
	);
};
