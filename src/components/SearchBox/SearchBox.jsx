import './SearchBox.scss';
import { RxMagnifyingGlass as SearchIcon } from 'react-icons/rx';
import { Label, Input } from '../../components';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function SearchBox() {
	const { search, setSearch } = useContext(DataContext);
	const isDesktop = useMediaQuery({ query: '(min-width: 560px)' });

	return (
		<Label
			htmlFor='searchInput'
			className='searchbox | shadow theme-transition'
		>
			{isDesktop && (
				<SearchIcon className='searchbox__icon | theme-transition' />
			)}
			<Input
				autoFocus
				className='searchbox__input | theme-transition'
				id='searchInput'
				type='search'
				autoComplete='off'
				placeholder='Search for a country...'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</Label>
	);
}
