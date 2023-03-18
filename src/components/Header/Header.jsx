import './Header.scss';
import { FaMoon as Moon } from 'react-icons/fa';
import { FiSun as Sun } from 'react-icons/fi';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	const { theme, setTheme, isDarkTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<header className='primary-header | shadow'>
			<div className='primary-header__wrapper | container'>
				<div>
					<Link to='/'>
						<h1 className='primary-header__logo | ff-heading fw-extrabold'>
							Where in the world?
						</h1>
					</Link>
				</div>
				<div>
					<button
						className='primary-header__theme-toggle'
						onClick={toggleTheme}
						aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
					>
						{theme === 'dark' ? <Sun /> : <Moon />}
					</button>
				</div>
			</div>
		</header>
	);
}
