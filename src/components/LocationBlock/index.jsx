import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.blockLocation}>
				<h3 className={styles.blockLocation__title}>Location</h3>
				<div className={styles.blockLocation__wrapper}>
					<p
						className={styles.blockLocation__wrapperItem}
						data-aos='zoom-in'
						data-aos-duration='1000'
						data-aos-once='true'
					>
						Наш праздник пройдёт
						<br />
						по адресу:
					</p>
					<p
						className={styles.blockLocation__wrapperItem}
						data-aos='zoom-in'
						data-aos-duration='1000'
						data-aos-once='true'
					>
						с. Абрам-Тюбе
						<br />
						б/з «Азалия»
					</p>
					<p
						className={styles.blockLocation__wrapperTime}
						data-aos='zoom-in'
						data-aos-duration='1600'
						data-aos-once='true'
					>
						19:00
					</p>
				</div>
			</div>
			<div className={styles.blockEnd}>
				<p
					className={styles.blockEnd__text}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					Мы будем рады видеть
					<br />
					вас в кругу наших гостей!
				</p>
				<p
					className={styles.blockEnd__text}
					data-aos='zoom-in'
					data-aos-duration='1600'
					data-aos-once='true'
				>
					Салим и Милена
				</p>
			</div>
		</div>
	);
};
