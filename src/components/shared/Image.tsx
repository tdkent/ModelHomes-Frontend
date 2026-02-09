import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

interface Props {
	homeId: number;
	imageId: string;
	lazy?: boolean;
	sizes?: string;
	isHero?: boolean;
	position?: string;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	homeId,
	imageId,
	lazy,
	sizes,
	isHero,
	position,
}: Props) {
	const [isLoading, setIsLoading] = useState(true);
	const srcSets = createSrcSets(homeId, imageId);

	// Specify aspect ratio to avoid layout shift after load
	const loadingAspectRatio = isLoading ? "aspect-5/3" : "aspect-auto";

	return (
		<div
			className={`w-full overflow-hidden ${isHero ? "aspect-2/1" : loadingAspectRatio}`}
		>
			{isLoading && (
				<div className="w-full h-full bg-black/5">
					<ImageIcon className="stroke-white size-12 stroke-1" />
				</div>
			)}
			<picture className="flex w-full h-full">
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={`${ASSETS_URL}/home-${homeId}/home-${imageId}@1280.jpeg`}
					alt={`Model Home #${homeId}`}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
					className={`object-cover w-full h-auto ${isHero && "blur-xs sepia"} ${position}`}
					onLoad={() => setIsLoading(false)}
				/>
			</picture>
		</div>
	);
}
