import './CountryList.scss';
import { CountryCard, Loader } from '../../components';
import { useFetch } from '../../hooks';
import DataContext from '../../context/DataContext';
import { useContext, useEffect, useState } from 'react';

export default function CountryList() {
	const [countries, fetchError, isLoading] = useFetch();
	const [filteredCountries, setFilteredCountries] = useState([]);
	const { search, filter } = useContext(DataContext);

	useEffect(() => {
		setFilteredCountries(
			countries.filter(
				country =>
					country.name.toLowerCase().includes(search.toLowerCase()) &&
					filter !== 'All' &&
					country.region.includes(filter),
			),
		);
	}, [search, filter, countries]);

	return (
		<>
			{isLoading ? (
				<Loader absolute />
			) : (
				<main className='countries | container'>
					{!fetchError && filteredCountries.length ? (
						filteredCountries.map((country, index) => (
							<CountryCard
								key={`country-${index + 1}`}
								country={country}
							/>
						))
					) : (
						<p className='error'>
							{fetchError ? fetchError : 'Couldn’t find matching countries'}
						</p>
					)}
				</main>
			)}
		</>
	);
}
