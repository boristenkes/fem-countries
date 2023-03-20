import './ThemeSwitcher.scss';

export default function ThemeSwitcher({
	isDarkMode,
	className = '',
	...props
}) {
	return (
		<button
			className={`${className} | icon ${isDarkMode && 'moon'}`}
			aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
			{...props}
			title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
		>
			<span className='star'>
				<span className='square'></span>
				<span className='square'></span>
			</span>
			<span className='circle circle--outer'></span>
			<span className='circle circle--inner'></span>
		</button>
	);
}
