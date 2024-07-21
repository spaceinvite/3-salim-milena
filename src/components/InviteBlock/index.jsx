import styles from './InviteBlock.module.scss';

export const InviteBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.blockLine}></div>
			<div className={styles.blockInvite}>
				<p
					className={styles.blockInvite__text}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					Дорогие гости!
				</p>
				<p
					className={styles.blockInvite__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Приглашаем вас разделить
					<br />с нами радость особенного
					<br />
					для нас события и<br />
					стать частью нашей
					<br />
					семейной истории!
				</p>
			</div>
			<div className={styles.blockDate}>
				<h3 className={styles.blockDate__title}>Date</h3>
				<p
					className={styles.blockDate__text}
					data-aos='zoom-in'
					data-aos-duration='1200'
					data-aos-once='true'
				>
					6 августа 2024
				</p>
				<div className={styles.blockDate__calendar}>
					{[
						1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
						20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
					].map((item, index) => (
						<div
							className={styles.blockDate__calendarItem}
							style={index === 0 ? { gridColumnStart: 4 } : {}}
							key={index}
						>
							{item}
						</div>
					))}
					<div
						className={styles.blockDate__calendarHeart}
						data-aos='zoom-in'
						data-aos-duration='1800'
						data-aos-once='true'
					>
						<svg
							width='50'
							height='44'
							viewBox='0 0 50 44'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clip-path='url(#clip0_2012_67)'>
								<path
									d='M36.3636 0C31.5909 0 27.4409 2.21609 25 5.92986C22.5591 2.21609 18.4091 0 13.6364 0C10.0211 0.00433533 6.55505 1.48501 3.99865 4.11722C1.44225 6.74942 0.00421048 10.3182 0 14.0407C0 20.8739 4.13636 27.9855 12.2955 35.1743C16.0342 38.4546 20.0728 41.3543 24.3545 43.8327C24.553 43.9425 24.7747 44 25 44C25.2253 44 25.447 43.9425 25.6455 43.8327C29.9272 41.3543 33.9658 38.4546 37.7045 35.1743C45.8636 27.9855 50 20.8739 50 14.0407C49.9958 10.3182 48.5578 6.74942 46.0014 4.11722C43.445 1.48501 39.9789 0.00433533 36.3636 0ZM25 40.9778C21.2705 38.7617 2.72727 27.0798 2.72727 14.0407C2.73028 11.0626 3.88059 8.20735 5.92579 6.10151C7.97099 3.99566 10.744 2.81124 13.6364 2.80814C18.2455 2.80814 22.1159 5.34249 23.7386 9.42365C23.8414 9.68118 24.0161 9.90144 24.2407 10.0564C24.4653 10.2115 24.7296 10.2942 25 10.2942C25.2704 10.2942 25.5347 10.2115 25.7593 10.0564C25.9839 9.90144 26.1586 9.68118 26.2614 9.42365C27.8841 5.34249 31.7545 2.80814 36.3636 2.80814C39.256 2.81124 42.029 3.99566 44.0742 6.10151C46.1194 8.20735 47.2697 11.0626 47.2727 14.0407C47.2727 27.0798 28.7295 38.7617 25 40.9778Z'
									fill='#F5F4F2'
								/>
							</g>
							<defs>
								<clipPath id='clip0_2012_67'>
									<rect width='50' height='44' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.blockLine}></div>
		</div>
	);
};
