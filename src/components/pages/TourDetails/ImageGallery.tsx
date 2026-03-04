import Image from "@/components/shared/Image";
import TextHeading from "@/components/shared/TextHeader";
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
			<TextHeading element="h2" text="Image Gallery" />
			<div className="flex flex-col gap-8 w-full max-w-120 mx-auto sm:mt-8 md:mt-12 md:gap-12">
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
