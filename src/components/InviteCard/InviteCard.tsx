import styles from "./InviteCard.module.css";

export default function InviteCard (){
	return (
			<div className={styles.inviteBlock}>
				<div className={styles.inviteText}>
					<h2 className={styles.inviteTextTitle}>
						Вас приглашает <strong>Иван</strong>,
					</h2>
					<p className={styles.inviteTextDescription}>
						Приняв приглашение вы мгновенно <strong>получите бонус</strong> на
						первую поездку на первую поездку
					</p>
					<div className={styles.bonus}>
						5000₽
					</div>
					<p className={styles.smallText}>
						Примите приглашение пройдя регистрацию, это займет 30 секунд
					</p>
				</div>
				<div className={styles.inviteImage}>
					<img src='./digital-gift-card.svg' alt='Приглашение' />
				</div>
				<div className={styles.inviteImageGift}>
					<img src='./gifts.svg' alt='Приглашение' />
				</div>
			</div>

	);
};

