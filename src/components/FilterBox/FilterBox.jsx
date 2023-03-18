import './FilterBox.scss';
import { useState } from 'react';
import { Label, Input } from '../../components';
import { HiChevronDown as ArrowIcon } from 'react-icons/hi';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export default function FilterBox() {
	const [filter, setFilter] = useState('Filter by Region');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleFilter = item => {
		setFilter(item);
		setIsDropdownOpen(false);
	};

	return (
		<div className='filterbox'>
			<button
				className='filterbox__dropdown-switcher'
				onClick={() => setIsDropdownOpen(prev => !prev)}
				aria-label='Dropdown'
				aria-expanded={isDropdownOpen}
			>
				<Label
					htmlFor='dropdown'
					className='filterbox__label | shadow'
				>
					<Input
						className='filterbox__input'
						id='dropdown'
						type='text'
						value={filter}
						onChange={e => setFilter(e.target.value)}
						readOnly
					/>
					<ArrowIcon className='filterbox__arrow-icon' />
				</Label>
			</button>
			<ul
				className='filterbox__options'
				data-open={isDropdownOpen}
			>
				{regions.map((item, index) => (
					<li
						key={`filterOption-${index + 1}`}
						className='filterbox__options--option'
					>
						<button onClick={() => handleFilter(item)}>{item}</button>
					</li>
				))}
			</ul>
		</div>
	);
}