import { useState } from 'react';
import { heroData } from '../../data/heroData';
import PreviewCard from '../containers/PreviewCard';

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
					<PreviewCard
						cardData={data.cards.parallaxCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
					<PreviewCard
						cardData={data.cards.pacmanCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
					<PreviewCard
						cardData={data.cards.frasierCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
					<PreviewCard
						cardData={data.cards.astroidCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
					<PreviewCard
						cardData={data.cards.tamagotchiCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
					<PreviewCard
						cardData={data.cards.moodcastCard}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></PreviewCard>
				</div>
			))}
		</div>
	);
};

export default Hero;

