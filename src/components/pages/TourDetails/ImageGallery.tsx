import Image from "@/components/shared/Image";
import type { ModelHome } from "@/types/types";

interface Props {
	id: number;
	gallery: ModelHome["images"]["gallery"];
	city: string;
}

export default function ImageGallery({ id, gallery, city }: Props) {
	return (
		<section>
			<h2>Image Gallery</h2>
			<div>
				{gallery.map((img) => {
					return <Image homeId={id} imageId={img} city={city} />;
				})}
			</div>
		</section>
	);
}
