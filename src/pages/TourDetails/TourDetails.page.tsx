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
		<div>
			<header className="relative">
				<Image
					altText={`Model Home #${validId}`}
					aspectRatio="aspect-2/1"
					imgStyles="sepia blur-xs"
					imgUrl={`${baseUrl}@1280s.jpeg`}
					srcSets={srcSets}
				/>
				<h1 className="absolute top-1/2 px-4 -translate-y-1/2 text-5xl">
					Model Home #{validId}
				</h1>
			</header>
			<HomeDetails id={validId} />
		</div>
	);
}
