import { ImageOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import type { SrcSets } from "@/types/types";

interface Props {
	altText: string;
	aspectRatio?: string;
	imgStyles?: string;
	imgUrl: string;
	lazy?: boolean;
	sizes?: string;
	srcSets: SrcSets;
}

/** Responsive picture element loads images based on display/device. */
export default function Image({
	altText,
	aspectRatio,
	imgStyles,
	imgUrl,
	lazy,
	sizes,
	srcSets,
}: Props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// If no AR specify one to avoid layout shift after load or error
	const loadingAspectRatio = loading || error ? "aspect-5/3" : "aspect-auto";

	return (
		<div
			className={`w-full overflow-hidden border bg-[#f9f9f9] ${aspectRatio || loadingAspectRatio}`}
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
			<picture className={`block w-full h-full ${error && "hidden"}`}>
				<source srcSet={srcSets.avif} sizes={sizes} type="image/avif" />
				<source srcSet={srcSets.webp} sizes={sizes} type="image/webp" />
				<img
					src={imgUrl}
					alt={altText}
					sizes={sizes}
					loading={lazy ? "lazy" : "eager"}
					className={`object-cover w-full h-auto ${imgStyles}`}
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
