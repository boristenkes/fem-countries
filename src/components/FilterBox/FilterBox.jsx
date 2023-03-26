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
			<div
				className='filterbox__dropdown-switcher'
				onClick={() => {
					setIsDropdownOpen(prev => !prev);
					setFilterClicks(prev => prev + 1);
				}}
				onKeyDown={e => e.key === 'Enter' && e.target.click()}
				aria-expanded={isDropdownOpen}
				role='button'
				tabIndex='0'
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
						placeholder={'Filter by Region'}
						readOnly
						disabled
					/>
					<ArrowIcon
						className='filterbox__arrow-icon | theme-transition'
						style={{ rotate: `${filterclicks * 180}deg` }}
						aria-hidden='true'
					/>
				</Label>
			</div>
			<ul
				className='filterbox__options | shadow theme-transition'
				data-open={isDropdownOpen}
			>
				{regions.map((item, index) => (
					<li
						key={`filterOption-${index + 1}`}
						className='filterbox__options--option'
					>
						<button
							onClick={() => handleFilter(item)}
							className='theme-transition'
							style={{ transitionDuration: '250ms' }}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
