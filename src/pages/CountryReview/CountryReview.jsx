import './CountryReview.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const dataKeys = [
	{
		key: 'name',
		label: 'Name',
	},
	{
		key: 'topLevelDomain',
		label: 'Top Level Domain',
	},
	{
		key: 'alpha2Code',
		label: 'Alpha 2 Code',
	},
	{
		key: 'alpha3Code',
		label: 'Alpha 3 Code',
	},
	{
		key: 'callingCodes',
		label: 'Calling Codes',
	},
	{
		key: 'altSpellings',
		label: 'Alt Spellings',
	},
	{
		key: 'subregion',
		label: 'Subregion',
	},
	{
		key: 'region',
		label: 'Region',
	},
	{
		key: 'population',
		label: 'Population',
	},
	{
		key: 'latlng',
		label: 'Latitude and Longitude',
	},
	{
		key: 'demonym',
		label: 'Demonym',
	},
	{
		key: 'area',
		label: 'Area',
	},
	{
		key: 'timezones',
		label: 'Timezones',
	},
	{
		key: 'nativeName',
		label: 'Native Name',
	},
	{
		key: 'numericCode',
		label: 'Numeric Code',
	},
	{
		key: 'cioc',
		label: 'CIOC',
	},
];

export default function CountryReview() {
	const [countries, fetchError, isLoading] = useFetch();
	const { name } = useParams();
	const navigate = useNavigate();

	const [borderCountries, setBorderCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState(null);

	useEffect(() => {
		setSelectedCountry(countries.find(country => country.name === name));
	}, [countries, name]);

	useEffect(() => {
		if (selectedCountry && selectedCountry.borders)
			setBorderCountries(
				countries.filter(country =>
					selectedCountry.borders.includes(country.alpha3Code),
				),
			);
	}, [countries, selectedCountry]);

	return (
		<>
			<div className='container section-padding'>
				<button
					onClick={() => navigate('/')}
					className='country-review__back-btn | shadow theme-transition'
				>
					<ArrowLeft /> Back
				</button>
			</div>
			<main className='country-review | container section-padding even-columns'>
				{!fetchError && selectedCountry ? (
					<>
						<div
							className='country-review__flag | shadow'
							style={{ '--flag': `url("${selectedCountry.flag}")` }}
						/>
						<div className='country-review__info'>
							<h2 className='country-review__info_name | theme-transition'>
								{selectedCountry.name}
							</h2>
							<div className='country-review__info_details | even-columns'>
								<div>
									{dataKeys
										.slice(0, dataKeys.length / 2)
										.map((dataKey, index) => (
											<p
												key={dataKey.label}
												className='country-review__info_details--value | theme-transition'
											>
												<span className='country-review__info_details--label'>
													{dataKey.label}:{' '}
												</span>
												{typeof selectedCountry[dataKey.key] === 'object'
													? selectedCountry[dataKey.key].join(', ')
													: typeof selectedCountry[dataKey.key] === 'number'
													? selectedCountry[dataKey.key].toLocaleString()
													: selectedCountry[dataKey.key] || '-'}
											</p>
										))}
								</div>

								<div>
									{dataKeys
										.slice(dataKeys.length / 2, dataKeys.length)
										.map((dataKey, index) => (
											<p
												key={dataKey.label}
												className='country-review__info_details--value | theme-transition'
											>
												<span className='country-review__info_details--label'>
													{dataKey.label}:{' '}
												</span>
												{typeof selectedCountry[dataKey.key] === 'object'
													? selectedCountry[dataKey.key].join(', ')
													: typeof selectedCountry[dataKey.key] === 'number'
													? selectedCountry[dataKey.key].toLocaleString()
													: selectedCountry[dataKey.key]}
											</p>
										))}
								</div>
							</div>
							{!!borderCountries.length && (
								<div className='country-review__borders theme-transition'>
									<p>Border Countries:</p>
									{borderCountries.map(borderCountry => (
										<Link
											className='country-review__borders--border | shadow theme-transition'
											to={`/${borderCountry.name}`}
											key={borderCountry.alpha3Code}
										>
											{borderCountry.name}
											<img
												src={borderCountry.flag}
												width='25'
												height='15'
											/>
										</Link>
									))}
								</div>
							)}
						</div>
					</>
				) : (
					<p>{fetchError}</p>
				)}
			</main>
		</>
	);
}
