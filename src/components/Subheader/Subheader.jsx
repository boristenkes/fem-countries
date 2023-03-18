import { SearchBox, FilterBox } from '../../components';
import './Subheader.scss';

export default function Subheader() {
	return (
		<section className='subheader | container section-padding'>
			<SearchBox />
			<FilterBox />
		</section>
	);
}
