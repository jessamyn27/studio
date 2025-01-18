import type { CardType } from '../../types/types';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Dropdown from '../elements/Dropdown';

type Props = {
	cardData: CardType;
	isClicked: boolean;
	isDisabled: boolean;
	onSubmit: () => void;
};

const Card = ({ cardData, isClicked, isDisabled, onSubmit }: Props) => {
	return (
		<div className="card_wrap">
			<div className={`card card_${cardData.name}`} id={cardData.name}>
				<div className="card_inner">
					<section className="card_info">
						<h1 className="card_title">{cardData.title}</h1>
						<h3 className="card_subtitle">{cardData.subtitle}</h3>
						<p className="card_desc">{cardData.description}</p>
					</section>
					{/* elements */}
					<Dropdown
						dropdownData={cardData.dropdowns.icons}
					></Dropdown>
					<Input inputData={cardData.inputs.firstName}></Input>
					<Input inputData={cardData.inputs.lastName}></Input>
					<Input inputData={cardData.inputs.email}></Input>
					<Input inputData={cardData.inputs.dateOfBirth}></Input>
					<Input inputData={cardData.inputs.phoneNumber}></Input>

					<Button
						buttonData={cardData.buttons.submitRequest}
						isClicked={isClicked}
						isDisabled={isDisabled}
						onSubmit={onSubmit}
					></Button>
				</div>
			</div>
		</div>
	);
};

export default Card;

