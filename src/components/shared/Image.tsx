import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

interface Props {
	homeId: number;
	imageId: string;
	city: string;
	lazy?: boolean;
	sizes?: string;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({ homeId, imageId, city, lazy, sizes }: Props) {
	const srcSets = createSrcSets(homeId, imageId);
	return (
		<>
			<picture>
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={`${ASSETS_URL}/${homeId}/home-${imageId}@1280.jpeg`}
					alt={`Model Home ${homeId} in ${city}`}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
				/>
			</picture>
		</>
	);
}
