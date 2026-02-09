import { ImageOff, LoaderCircle } from "lucide-react";
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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const srcSets = createSrcSets(homeId, imageId);

	// Specify aspect ratio to avoid layout shift after load or error
	const loadingAspectRatio = loading || error ? "aspect-5/3" : "aspect-auto";

	return (
		<div
			className={`w-full overflow-hidden border bg-[#f9f9f9] ${isHero ? "aspect-2/1" : loadingAspectRatio}`}
		>
			{loading && (
				<div className="flex items-center gap-2 text-sm p-4">
					<LoaderCircle className="size-6 stroke-1 animate-spin" />
					Loading...
				</div>
			)}
			{error && (
				<div className="flex items-center gap-2 text-sm p-4">
					<ImageOff className="size-6 stroke-1" />
					The image failed to load.
				</div>
			)}
			<picture className={`flex w-full h-full ${error && "hidden"}`}>
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={`${ASSETS_URL}/home-${homeId}/home-${imageId}@1280s.jpeg`}
					alt={`Model Home #${homeId}`}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
					className={`object-cover w-full h-auto ${isHero && "blur-xs sepia"} ${position}`}
					onLoad={() => setLoading(false)}
					onError={() => {
						setLoading(false);
						setError(true);
					}}
				/>
			</picture>
		</div>
	);
}
