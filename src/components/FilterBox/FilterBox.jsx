import './FilterBox.scss';
import { useState } from 'react';
import { Label, Input } from '../../components';
import { HiChevronDown as ArrowIcon } from 'react-icons/hi';
import DataContext from '../../context/DataContext';
import { useContext } from 'react';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'All'];

export default function FilterBox() {
	const { filter, setFilter } = useContext(DataContext);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [filterclicks, setFilterClicks] = useState(0);

	const handleFilter = filter => {
		setFilter(filter !== 'All' ? filter : '');
		setIsDropdownOpen(false);
	};

	return (
		<div className='filterbox'>
			<button
				className='filterbox__dropdown-switcher'
				onClick={() => {
					setIsDropdownOpen(prev => !prev);
					setFilterClicks(prev => prev + 1);
				}}
				aria-expanded={isDropdownOpen}
			>
				<Label
					htmlFor='dropdown'
					className='filterbox__label | shadow theme-transition'
				>
					<Input
						className='filterbox__input | theme-transition'
						id='dropdown'
						type='text'
						value={filter}
						onChange={e => setFilter(e.target.value)}
						placeholder='Filter by Region'
						readOnly
						disabled
					/>
					<ArrowIcon
						className='filterbox__arrow-icon | theme-transition'
						style={{ rotate: `${filterclicks * 180}deg` }}
						aria-hidden='true'
					/>
				</Label>
			</button>
			<ul
				className='filterbox__options | shadow theme-transition'
				data-open={isDropdownOpen}
				aria-label='Filter options'
			>
				{regions.map((item, index) => (
					<li
						key={`filterOption-${index + 1}`}
						className='filterbox__options--option'
					>
						<button
							onClick={() => handleFilter(item)}
							className='theme-transition'
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
