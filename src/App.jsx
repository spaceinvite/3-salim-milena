import { Route, Routes } from 'react-router-dom';

import { Main } from './pages/Main';
import './assets/scss/main.scss';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
}

export default App;
