import './SearchBox.scss';
import { RxMagnifyingGlass as SearchIcon } from 'react-icons/rx';
import { Label, Input } from '../../components';

export default function SearchBox() {
	return (
		<Label
			htmlFor='searchInput'
			className='searchbox | shadow'
		>
			<SearchIcon className='searchbox__icon' />
			<Input
				autoFocus
				className='searchbox__input'
				id='searchInput'
				type='text'
				placeholder='Search for a country...'
			/>
		</Label>
	);
}
