import { ASSETS_URL } from "@/constants/constants";

interface Thumbnail {
	id: number;
	imgId: string;
}

export default function Thumbnail({ id, imgId }: Thumbnail) {
	const imgUrl = `${ASSETS_URL}/home-${id}/home-${imgId}@128.webp`;
	return (
		<div className="rounded-full w-16 aspect-square overflow-hidden relative border">
			<img
				src={imgUrl}
				alt={`Icon of model home #${id}`}
				className="object-cover w-full h-full"
			/>
		</div>
	);
}
