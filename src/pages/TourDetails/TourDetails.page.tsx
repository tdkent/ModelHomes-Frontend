import { useParams } from "react-router";
import HomeDetails from "@/components/pages/TourDetails/HomeDetails";
import Image from "@/components/shared/Image";
import { ASSETS_URL } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";
import checkHomeId from "../../helpers/checkHomeId";
import NotFoundPage from "../NotFound.page";

export default function TourDetailsPage() {
	const { id } = useParams();
	const validId = checkHomeId(id);
	if (!validId) return <NotFoundPage />;

	const baseUrl = `${ASSETS_URL}/home-${validId}/home-${validId}-1`;
	const srcSets = createSrcSets(baseUrl);

	return (
		<article className="gap-4">
			<header className="relative">
				<Image
					altText={`Model Home #${validId}`}
					aspectRatio="aspect-square sm:aspect-video lg:aspect-2/1 xl:aspect-5/2"
					imgStyles="blur-xs scale-105 lg:blur-[6px] opacity-75"
					imgUrl={`${baseUrl}@1280s.jpeg`}
					srcSets={srcSets}
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent"></div>
				<div className="border-2 border-red-600 w-full">
					<h1 className="absolute top-1/2 px-6 -translate-y-1/2 font-sans text-[32px] text-background drop-shadow-[2px_2px_0] sm:drop-shadow-[2px_3px_0] xl:drop-shadow-[3px_5px_0] drop-shadow-blue-300 sm:text-5xl sm:px-12 lg:px-12 lg:text-6xl xl:px-20 lg:w-full lg:text-center xl:text-7xl 2xl:text-8xl">
						Model Home #{validId}
					</h1>
				</div>
			</header>
			<HomeDetails id={validId} />
		</article>
	);
}
