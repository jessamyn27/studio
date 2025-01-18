import { InputType } from '../../types/types'

type Props = {
    inputData: InputType,
}

const Input = ({ inputData }: Props) => {
    return (
        <div className="input_wrap">
            <label
                htmlFor={inputData.name}>
                {inputData.label}
            </label>
            <input
                className={inputData.name}
                type={inputData.type}
                name={inputData.name}
                placeholder={inputData.placeholder}
                required={inputData.isRequired}
                minLength={inputData.minLength}
                maxLength={inputData.maxLength}
                aria-setsize={inputData.size}>
            </input>
        </div>
    )
}

export default Input;