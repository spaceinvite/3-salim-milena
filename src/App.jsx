import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main';
import './assets/scss/main.scss';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main state='bride' />} />
			<Route path='/wd' element={<Main state='groom' />} />
		</Routes>
	);
}

export default App;
