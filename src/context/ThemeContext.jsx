import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
	const defaultTheme = localStorage.getItem('theme')
		? localStorage.getItem('theme')
		: window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	const [theme, setTheme] = useState(defaultTheme);
	const isDarkTheme = theme === 'dark';
	const isLightTheme = theme === 'light';

	useEffect(() => {
		// Switch `data-theme` on `html` tag
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{ theme, setTheme, isDarkTheme, isLightTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
