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
					aspectRatio="aspect-2/1"
					imgStyles="blur-[3px] scale-105"
					imgUrl={`${baseUrl}@1280s.jpeg`}
					srcSets={srcSets}
				/>
				<h1 className="absolute top-1/2 px-4 -translate-y-1/2 font-sans text-3xl text-background text-shadow-lg">
					Model Home #{validId}
				</h1>
			</header>
			<HomeDetails id={validId} />
		</article>
	);
}
