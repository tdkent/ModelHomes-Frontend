import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

interface Props {
	homeId: number;
	imageId: string;
	lazy?: boolean;
	sizes?: string;
	aspectRatio?: string;
	isHero?: boolean;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	homeId,
	imageId,
	lazy,
	sizes,
	aspectRatio,
	isHero,
}: Props) {
	const srcSets = createSrcSets(homeId, imageId);
	return (
		<div
			className={`w-full relative aspect-${aspectRatio || "auto"} overflow-hidden`}
		>
			<picture className={`object-cover ${isHero && "blur-xs sepia"}`}>
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={`${ASSETS_URL}/${homeId}/home-${imageId}@1280.jpeg`}
					alt={`Model Home #${homeId}`}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
				/>
			</picture>
		</div>
	);
}
