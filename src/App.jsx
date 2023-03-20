import { Header } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, CountryReview } from './pages';

function App() {
	return (
		<div
			className='App | theme-transition'
			style={{ minHeight: '100vh', backgroundColor: 'var(--body-bg)' }}
		>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:name'
					element={<CountryReview />}
				/>
			</Routes>
		</div>
	);
}

export default App;
