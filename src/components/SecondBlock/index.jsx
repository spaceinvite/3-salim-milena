import styles from './SecondBlock.module.scss';

export const SecondBlock = () => {
	return (
		<div className={styles.block}>
			<div
				className={styles.blockPhoto}
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-once='true'
			>
				<div className={styles.blockPhoto__item1} />
				<div className={styles.blockPhoto__item2} />
			</div>
		</div>
	);
};
