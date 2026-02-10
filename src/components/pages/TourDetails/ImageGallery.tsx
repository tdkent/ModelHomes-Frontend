import Image from "@/components/shared/Image";
import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

interface Props {
	id: number;
	gallery: string[];
	city: string;
}

export default function ImageGallery({ id, gallery }: Props) {
	return (
		<section>
			<h2>Image Gallery</h2>
			<div className="flex flex-col gap-8">
				{gallery.map((img) => {
					const baseUrl = `${ASSETS_URL}/home-${id}/home-${img}`;
					return (
						<Image
							altText={`Model home #${id}`}
							key={img}
							srcSets={createSrcSets(baseUrl)}
							imgUrl={`${baseUrl}@1280s.jpeg`}
							lazy
						/>
					);
				})}
			</div>
		</section>
	);
}
