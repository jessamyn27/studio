import { ButtonType } from "../../types/types";

type Props = {
    buttonData: ButtonType,
    isClicked: boolean,
    isDisabled: boolean,
    onSubmit: () => void,
}
const Button = ({ buttonData, onSubmit, isDisabled, isClicked }: Props) => {
    return (
        <>
            <button
                className={`button button-${buttonData.type} ${isDisabled ? 'disabled' : ''}`}
                value={buttonData.value}
                onClick={onSubmit}
            >{buttonData.title}
            </button>
            {(isClicked) &&
                <p>{buttonData.validation}</p>}
        </>
    )
}

export default Button;