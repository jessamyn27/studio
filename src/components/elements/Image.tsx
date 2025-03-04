import { ImageType } from '../../types/types';

type Props = {
	imageData: ImageType;
};

const Image = ({ imageData }: Props) => {
	return (
		<>
			{imageData.element === 'link' && (
				<a href={imageData.link}>
					<img
						src={`./src/assets/${imageData.image.url}.${imageData.image.fileType}`}
						alt={imageData.image.alt}
					/>
				</a>
			)}
			<img
				src={`./src/assets/${imageData.image.url}.${imageData.image.fileType}`}
				alt={imageData.image.alt}
			/>
		</>
	);
};

export default Image;

