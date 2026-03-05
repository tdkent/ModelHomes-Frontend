import { X } from "lucide-react";
import Image from "@/components/shared/Image";
import TextHeading from "@/components/shared/TextHeader";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
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
						<Dialog key={img}>
							<DialogTrigger className="cursor-pointer scale:100 hover:scale-105 transition duration-300">
								<div className="border border-white md:shadow-[8px_8px_1px] transition duration-300 md:hover:shadow-[12px_12px_6px] shadow-black/40">
									<Image
										altText={`Model home #${id}`}
										key={img}
										srcSets={createSrcSets(baseUrl)}
										imgUrl={`${baseUrl}@1280.jpeg`}
										lazy
									/>
								</div>
							</DialogTrigger>
							<DialogContent className="min-w-full h-full overflow-auto flex items-center justify-center bg-black/75 rounded-none border-none p-0 [&>button]:hidden">
								<DialogHeader className="sr-only">
									<DialogTitle>`Model Home #${id}`</DialogTitle>
									<DialogDescription>
										Full-screen image of Model Home #${id}
									</DialogDescription>
								</DialogHeader>

								<img
									src={`${baseUrl}@1280.jpeg`}
									alt={`Model home #${id}`}
									className="object-cover"
								/>

								<DialogFooter className="fixed right-2 top-2 scale-90 sm:justify-start md:right-4 md:top-4 lg:right-8 lg:top-8">
									<DialogClose asChild>
										<Button
											aria-label="Close"
											className="cursor-pointer font-sans opacity-90 text-xs md:text-sm lg:text-lg"
											type="button"
											variant="secondary"
											size="sm"
										>
											<X className="size-4 md:size-5 lg:size-6" />
											Close
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					);
				})}
			</div>
		</section>
	);
}
