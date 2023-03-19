import './CountryReview.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { BsArrowLeft as ArrowLeft } from 'react-icons/bs';

export default function CountryReview() {
	const [countries, fetchError, isLoading] = useFetch();
	const { name } = useParams();
	const navigate = useNavigate();

	const selectedCountry = countries.find(country => country.name === name);

	const borderCountries = countries.filter(country =>
		selectedCountry.borders.includes(country.alpha3Code),
	);

	return (
		<>
			<div className='container section-padding'>
				<button
					onClick={() => navigate('/')}
					className='country-review__back-btn | shadow'
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
							<h2 className='country-review__info_name'>
								{selectedCountry.name}
							</h2>
							<div className='country-review__info_details'>
								<div>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Native Name:{' '}
										</span>
										{selectedCountry.nativeName}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Population:{' '}
										</span>
										{selectedCountry.population.toLocaleString()}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Region:{' '}
										</span>
										{selectedCountry.region}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Sub Region:{' '}
										</span>
										{selectedCountry.subregion}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Capital:{' '}
										</span>
										{selectedCountry.capital}
									</p>
								</div>
								<div>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Top Level Domain:{' '}
										</span>
										{...selectedCountry.topLevelDomain}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Currencies:{' '}
										</span>
										{selectedCountry.currencies.map(currency => currency.name)}
									</p>
									<p className='country-review__info_details--value'>
										<span className='country-review__info_details--label'>
											Langues:{' '}
										</span>
										{selectedCountry.languages.map(language => language.name)}
									</p>
								</div>
							</div>
							<div className='country-review__borders'>
								<p>Border Countries:</p>
								{borderCountries.map(borderCountry => (
									<Link
										className='country-review__borders--border | shadow'
										to={`/${borderCountry.name}`}
										key={borderCountry.alpha3Code}
									>
										{borderCountry.name}
									</Link>
								))}
							</div>
						</div>
					</>
				) : (
					<p>{fetchError}</p>
				)}
			</main>
		</>
	);
}
