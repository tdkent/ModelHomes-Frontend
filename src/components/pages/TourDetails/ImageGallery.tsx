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
								<Image
									altText={`Model home #${id}`}
									key={img}
									srcSets={createSrcSets(baseUrl)}
									imgUrl={`${baseUrl}@1280s.jpeg`}
									lazy
								/>
							</DialogTrigger>
							<DialogContent className="max-h-full min-w-full rounded-none border-none p-0 [&>button]:hidden">
								<DialogHeader className="sr-only">
									<DialogTitle>`Model Home #${id}`</DialogTitle>
									<DialogDescription>
										Full-screen image of Model Home #${id}
									</DialogDescription>
								</DialogHeader>
								<div className="w-full h-auto">
									<Image
										altText={`Model home #${id}`}
										key={img}
										srcSets={createSrcSets(baseUrl)}
										imgUrl={`${baseUrl}@1280s.jpeg`}
										lazy
									/>
								</div>
								<DialogFooter className="absolute right-2 top-2 scale-90 sm:justify-start md:right-4 md:top-4 lg:right-8 lg:top-8">
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
