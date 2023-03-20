import { useState, useEffect } from 'react';

export default function useFetch(apiUrl = '../../data.json') {
	const [data, setData] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		try {
			(async () => {
				const response = await fetch(apiUrl);
				if (response.ok) {
					const data = await response.json();
					setData(data);
					setFetchError(null);
				}
			})();
		} catch (err) {
			setFetchError(err.message);
			setData([]);
		} finally {
			setIsLoading(false);
		}
	}, [apiUrl]);

	return [data, fetchError, isLoading];
}
