import { navbarData } from '../../data/navbarData';
import Link from '../elements/Link';

const Navbar = () => {
	return (
		<>
			{navbarData.map((data) => (
				<nav key={data.title} className="navbar_wrap">
					{/* containers / elements*/}
					<ul className="navbar">
						<li>
							<Link linkData={data.links.logo}></Link>
						</li>
						<li>
							<Link linkData={data.links.home}></Link>
						</li>
					</ul>
				</nav>
			))}
		</>
	);
};

export default Navbar;

