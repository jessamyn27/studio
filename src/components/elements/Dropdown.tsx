import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownType } from '../../types/types';

type Props = {
	dropdownData: DropdownType;
};
const Dropdown = ({ dropdownData }: Props) => {
	const [dropdown, setDropdown] = useState<boolean>(false);
	const ref = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const handler = (event: Event) => {
			if (dropdown && ref.current && ref.current !== event.target) {
				setDropdown(false);
			}
		};
		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler);
		return () => {
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler);
		};
	}, [dropdown]);

	return (
		<div className="dropdown_wrap">
			<div className="dropdown">
				<a
					type="button"
					role="button"
					aria-expanded={dropdown ? 'true' : 'false'}
					onClick={() => setDropdown((prev) => !prev)}
					// TIP: for hover to dropdown use ->
					// onMouseEnter={() => setDropdown((prev) => !prev)}
					ref={ref}
				>
					{dropdownData.title}
				</a>
				<ul className={dropdown ? 'show' : ''}>
					{dropdownData.menu.map((item) => (
						<li key={item.title}>
							<NavLink to={item.value}>{item.title}</NavLink>
						</li>
						// TIP: if dropdown is selectable input ->
						// change <link> to <select> then nest <option>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;

