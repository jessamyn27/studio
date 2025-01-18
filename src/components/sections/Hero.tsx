import { useState } from 'react';
import { heroData } from '../../data/heroData';
import Card from '../containers/Card';

const Hero = () => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const onSubmit = (): void => {
		setIsClicked(true);
		setIsDisabled(true);
	};

	return (
		<div className="hero_wrap">
			{heroData.map((data) => (
				<div key={data.title} className={data.title}>
					{/* containers / elements */}
					<Card
						cardData={data.cards.heroCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></Card>
				</div>
			))}
		</div>
	);
};

export default Hero;

