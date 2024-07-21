import { useState, useEffect, useRef } from 'react';

import styles from './StartBlock.module.scss';
import music from '../../assets/audio/music.mp3';

export const StartBlock = () => {
	const audioRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.3;
		}
	});

	return (
		<div className={styles.block}>
			<div className={styles.blockTop}>
				<p
					className={styles.blockTop__text}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					SAVE THE DATE
				</p>
				<div
					className={styles.blockTop__music}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					{isPlaying ? (
						<div className={styles.blockTop__musicHigh} onClick={togglePlay}>
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M17.27 24.9212C16.9552 24.9196 16.6463 24.836 16.3737 24.6787L11.7875 22.0287C11.1695 21.6733 10.4691 21.4863 9.75621 21.4862H5.54871C4.76164 21.4846 4.00729 21.1711 3.45087 20.6144C2.89444 20.0578 2.58128 19.3033 2.57996 18.5162V11.4837C2.58161 10.6969 2.89492 9.94272 3.45131 9.38633C4.0077 8.82994 4.76185 8.51663 5.54871 8.51498H9.75621C10.4693 8.51417 11.1697 8.32625 11.7875 7.96998L16.375 5.32373C16.6477 5.16641 16.957 5.08355 17.2718 5.08344C17.5867 5.08332 17.896 5.16597 18.1689 5.32309C18.4417 5.48021 18.6684 5.70629 18.8264 5.97866C18.9843 6.25103 19.0679 6.56013 19.0687 6.87498V23.125C19.0711 23.4408 18.9891 23.7515 18.8314 24.025C18.6736 24.2986 18.4457 24.5251 18.1712 24.6812C17.8969 24.8385 17.5862 24.9212 17.27 24.9212ZM5.54871 9.76498C5.09307 9.76564 4.65628 9.94694 4.3341 10.2691C4.01191 10.5913 3.83062 11.0281 3.82996 11.4837V18.5162C3.83127 18.9718 4.01274 19.4083 4.33475 19.7306C4.65675 20.0528 5.09316 20.2346 5.54871 20.2362H9.75621C10.6887 20.2361 11.6048 20.4814 12.4125 20.9475L17 23.595C17.0834 23.6423 17.1777 23.6669 17.2736 23.6665C17.3695 23.6661 17.4636 23.6406 17.5466 23.5926C17.6296 23.5446 17.6986 23.4757 17.7468 23.3928C17.7949 23.3099 17.8206 23.2159 17.8212 23.12V6.87498C17.8211 6.77891 17.7958 6.68454 17.7477 6.60137C17.6996 6.51819 17.6305 6.44914 17.5473 6.40113C17.4641 6.35312 17.3697 6.32786 17.2736 6.32788C17.1775 6.3279 17.0832 6.35319 17 6.40123L12.4125 9.05248C11.6049 9.51901 10.6888 9.76475 9.75621 9.76498H5.54871ZM23.0087 7.82748C24.0037 8.73778 24.7988 9.84485 25.3436 11.0785C25.8884 12.3122 26.171 13.6456 26.1734 14.9942C26.1759 16.3428 25.8982 17.6772 25.358 18.9129C24.8177 20.1486 24.0267 21.2585 23.035 22.1725C22.4425 22.7187 23.3287 23.6012 23.9187 23.0562C25.0256 22.0256 25.9078 20.7777 26.5103 19.3905C27.1127 18.0032 27.4224 16.5066 27.4199 14.9943C27.4174 13.4819 27.1029 11.9863 26.4959 10.601C25.889 9.21581 25.0027 7.97073 23.8925 6.94373C23.3 6.40123 22.4125 7.28373 23.0087 7.82748Z'
									fill='#F5F4F2'
								/>
								<path
									d='M21.1375 11.2888C21.6543 11.7586 22.0675 12.331 22.3507 12.9694C22.6338 13.6079 22.7808 14.2983 22.7822 14.9967C22.7836 15.6951 22.6395 16.3862 22.3589 17.0257C22.0783 17.6653 21.6674 18.2394 21.1525 18.7113C20.56 19.2588 21.445 20.14 22.0363 19.595C22.666 19.0062 23.1677 18.2941 23.5103 17.5031C23.8529 16.712 24.0289 15.8588 24.0275 14.9968C24.0261 14.1347 23.8473 13.2821 23.5021 12.4922C23.157 11.7022 22.6529 10.9918 22.0213 10.405C21.4288 9.86253 20.5425 10.745 21.1375 11.2888Z'
									fill='#F5F4F2'
								/>
							</svg>
						</div>
					) : (
						<div className={styles.blockTop__musicMute} onClick={togglePlay}>
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M17.2713 24.92C16.9546 24.9195 16.644 24.8331 16.3725 24.67L11.7875 22.03C11.17 21.6732 10.4695 21.4852 9.7563 21.485H5.55005C4.76289 21.4843 4.00816 21.1713 3.45156 20.6147C2.89495 20.0581 2.58196 19.3034 2.5813 18.5162V11.4837C2.58262 10.6967 2.89578 9.94219 3.45221 9.38553C4.00864 8.82887 4.76298 8.51539 5.55005 8.51374H9.7563C10.4692 8.51369 11.1696 8.32663 11.7875 7.97124L16.375 5.32374C16.6478 5.16682 16.957 5.08427 17.2717 5.08435C17.5865 5.08443 17.8956 5.16712 18.1683 5.32417C18.441 5.48122 18.6678 5.70712 18.8258 5.97927C18.9838 6.25142 19.0676 6.56029 19.0688 6.87499V23.125C19.0712 23.4408 18.9892 23.7515 18.8315 24.025C18.6737 24.2986 18.4458 24.5251 18.1713 24.6812C17.8974 24.8384 17.587 24.9207 17.2713 24.92ZM5.55005 9.76374C5.09419 9.7644 4.65722 9.94587 4.335 10.2683C4.01278 10.5908 3.83163 11.0279 3.8313 11.4837V18.5162C3.83196 18.9719 4.01325 19.4087 4.33544 19.7308C4.65762 20.053 5.09441 20.2343 5.55005 20.235H9.7563C10.689 20.2356 11.6051 20.4818 12.4125 20.9487L17 23.595C17.0835 23.643 17.1781 23.6683 17.2744 23.6683C17.3707 23.6683 17.4653 23.643 17.5488 23.595C17.6324 23.5476 17.7018 23.4787 17.7498 23.3953C17.7977 23.312 17.8224 23.2174 17.8213 23.1212V6.87499C17.8212 6.77891 17.7959 6.68455 17.7478 6.60138C17.6997 6.5182 17.6306 6.44914 17.5474 6.40114C17.4642 6.35313 17.3698 6.32787 17.2737 6.32789C17.1776 6.3279 17.0833 6.3532 17 6.40124L12.4125 9.05249C11.6049 9.51859 10.6888 9.76389 9.7563 9.76374H5.55005ZM22.0076 18.0562C21.8874 18.1596 21.7324 18.2135 21.5741 18.207C21.4157 18.2004 21.2657 18.134 21.1545 18.021C21.0433 17.908 20.9791 17.757 20.9751 17.5986C20.971 17.4401 21.0273 17.286 21.1325 17.1675C21.3451 16.9562 21.5576 16.7312 21.7826 16.5175L23.295 15.0062C22.5826 14.28 21.8575 13.555 21.1325 12.8312C21.0293 12.7124 20.9746 12.559 20.9795 12.4016C20.9845 12.2442 21.0486 12.0945 21.1592 11.9824C21.2697 11.8703 21.4185 11.804 21.5758 11.7968C21.7331 11.7897 21.8873 11.8421 22.0076 11.9437L24.1826 14.1175L26.3576 11.9437C26.4778 11.8421 26.632 11.7897 26.7893 11.7968C26.9466 11.804 27.0954 11.8703 27.2059 11.9824C27.3165 12.0945 27.3806 12.2442 27.3856 12.4016C27.3905 12.559 27.3358 12.7124 27.2325 12.8312L25.07 15.0062L27.2325 17.1675C27.3378 17.286 27.3941 17.4401 27.39 17.5986C27.386 17.757 27.3218 17.908 27.2106 18.021C27.0994 18.134 26.9494 18.2004 26.791 18.207C26.6327 18.2135 26.4777 18.1596 26.3576 18.0562L24.1788 15.875L22.0076 18.0562Z'
									fill='#F5F4F2'
								/>
							</svg>
						</div>
					)}
					<audio src={music} ref={audioRef} autoPlay loop controls hidden />
				</div>
			</div>
			<div
				className={styles.blockDate}
				data-aos='zoom-in-up'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				06
				<br />
				08
				<br />
				24
			</div>
			<div
				className={styles.blockNames}
				data-aos='zoom-in-down'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				SALIM
				<br />&<br />
				MILENA
			</div>
		</div>
	);
};
