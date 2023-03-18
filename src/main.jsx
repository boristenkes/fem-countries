import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/styles.scss';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HashRouter>
			<DataProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</DataProvider>
		</HashRouter>
	</React.StrictMode>,
);
