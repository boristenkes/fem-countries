import './Header.scss';
import { FaMoon as Moon } from 'react-icons/fa';
import { FiSun as Sun } from 'react-icons/fi';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../../components';

export default function Header() {
	const { theme, setTheme, isDarkTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<header className='primary-header | shadow theme-transition'>
			<div className='primary-header__wrapper | container'>
				<div>
					<Link to='/'>
						<h1 className='primary-header__logo | ff-heading fw-extrabold theme-transition'>
							Where in the world?
						</h1>
					</Link>
				</div>
				<div>
					<ThemeSwitcher
						isDarkMode={isDarkTheme}
						className='primary-header__theme-toggle | theme-transition'
						onClick={toggleTheme}
						aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
					/>
				</div>
			</div>
		</header>
	);
}
