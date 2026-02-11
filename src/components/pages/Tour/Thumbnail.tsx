import { Image, ImageOff } from "lucide-react";
import { useState } from "react";
import { ASSETS_URL } from "@/constants/constants";

interface Thumbnail {
	id: number;
	imgId: string;
}

export default function Thumbnail({ id, imgId }: Thumbnail) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const imgUrl = `${ASSETS_URL}/home-${id}/home-${imgId}@128.webp`;
	return (
		<div className="flex items-center justify-center rounded-full w-16 aspect-square overflow-hidden relative border">
			{loading && <Image className="stroke-1 size-6 stroke-slate-400" />}
			{error && <ImageOff className="stroke-1 size-6 stroke-slate-400" />}
			<img
				src={imgUrl}
				alt={`Icon of model home #${id}`}
				className={`object-cover w-full h-full ${error && "hidden"}`}
				onLoad={() => setLoading(false)}
				onError={() => {
					setLoading(false);
					setError(true);
				}}
			/>
		</div>
	);
}
