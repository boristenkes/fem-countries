import { Header } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, CountryReview } from './pages';

function App() {
	return (
		<div
			className='App'
			style={{ minHeight: '100vh', backgroundColor: 'var(--body-bg)' }}
		>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/:id'
					element={<CountryReview />}
				/>
			</Routes>
		</div>
	);
}

export default App;
