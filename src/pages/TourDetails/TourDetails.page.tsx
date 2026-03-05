import { useEffect } from "react";
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

	useEffect(() => {
		if (validId)
			document.title = `Model Home #${validId} | Model Homes of the San Francisco International
					Exposition`;
	}, [validId]);

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
					isHeader
					srcSets={srcSets}
				/>
				<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white to-transparent"></div>
				<div className="w-full">
					<h1 className="absolute w-full top-1/2 px-6 -translate-y-1/2 font-sans text-[9vw] text-center text-background drop-shadow-[1px_1px_0] drop-shadow-blue-900 sm:drop-shadow-blue-400 sm:drop-shadow-[2px_3px_0] sm:px-12 lg:px-12 lg:text-[7vw] xl:px-20 xl:drop-shadow-[3px_5px_0]">
						Model Home #{validId}
					</h1>
				</div>
			</header>
			<HomeDetails id={validId} />
		</article>
	);
}
