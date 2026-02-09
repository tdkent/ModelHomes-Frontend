import Image from "@/components/shared/Image";

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
					return <Image key={img} homeId={id} imageId={img} lazy />;
				})}
			</div>
		</section>
	);
}
