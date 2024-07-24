import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { DesktopView } from '../../components/DesktopView';
import { StartBlock } from '../../components/StartBlock';
import { SecondBlock } from '../../components/SecondBlock';
import { InviteBlock } from '../../components/InviteBlock';
import { LocationBlock } from '../../components/LocationBlock';
import styles from './Main.module.scss';

export const Main = ({ state }) => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className={styles.main}>
			<DesktopView />
			<div className={styles.mainMobile}>
				<StartBlock state={state} />
				<SecondBlock />
				<InviteBlock state={state} />
				<LocationBlock />
			</div>
		</div>
	);
};
