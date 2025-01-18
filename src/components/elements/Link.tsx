import { NavLink } from 'react-router-dom';
import type { LinkType } from '../../types/types';
import Image from '../elements/Image';

type Props = {
	linkData: LinkType;
};

const Link = ({ linkData }: Props) => {
	return (
		<div className="link_wrap">
			{linkData.image ? (
				<NavLink to={linkData.link}>
					<Image imageData={linkData.image}></Image>
				</NavLink>
			) : (
				<NavLink to={linkData.link}>{linkData.title}</NavLink>
			)}
		</div>
	);
};

export default Link;

