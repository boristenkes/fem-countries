import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('');

	return (
		<DataContext.Provider value={{ search, setSearch, filter, setFilter }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
