import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

interface Props {
	homeId: number;
	imageId: string;
	city: string;
	lazy?: boolean;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({ homeId, imageId, city, lazy }: Props) {
	const srcSets = createSrcSets(homeId, imageId);
	return (
		<>
			<picture>
				<source srcSet={srcSets.avif} sizes="" type="image/avif" />
				<source srcSet={srcSets.webp} sizes="" type="image/webp" />
				<img
					src={`${ASSETS_URL}/${homeId}/home-${imageId}@1280.jpeg`}
					alt={`Model Home ${homeId} in ${city}`}
					loading={lazy ? "lazy" : "eager"}
				/>
			</picture>
		</>
	);
}
