import { Link } from 'react-router-dom';
import './CountryCard.scss';

export default function CountryCard({ country }) {
	return (
		<article className='country | shadow'>
			<Link to={`/${country.name}`}>
				<div
					className='country__flag'
					style={{ '--flag': `url(${country.flag})` }}
				/>
				<div className='country__info'>
					<h2 className='country__info_name'>{country.name}</h2>
					<div className='country__info_details'>
						<p>
							<span>Population: </span>
							{country.population.toLocaleString('en-US')}
						</p>
						<p>
							<span>Region: </span>
							{country.region}
						</p>
						<p>
							<span>Capital: </span>
							{country.capital}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
}
