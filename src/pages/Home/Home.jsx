import { Subheader } from '../../components';
import { CountryList } from '../../containers';
import './Home.scss';

export default function Home() {
	return (
		<>
			<Subheader />
			<CountryList />
		</>
	);
}
