import { ImageType } from "../../types/types";

type Props = {
    imageData: ImageType,
}

const Image = ({ imageData }: Props) => {
    return (
        <div>
            <img
                src={`./src/assets/${imageData.url}.${imageData.fileType}`}
                alt={imageData.alt} />
        </div>
    )
}

export default Image