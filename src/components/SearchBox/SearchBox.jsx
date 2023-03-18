import './SearchBox.scss';
import { RxMagnifyingGlass as SearchIcon } from 'react-icons/rx';
import { Label, Input } from '../../components';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';

export default function SearchBox() {
	const { search, setSearch } = useContext(DataContext);

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
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</Label>
	);
}
