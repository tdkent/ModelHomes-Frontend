import { useParams } from "react-router";
import HomeDetails from "@/components/pages/TourDetails/HomeDetails";
import Image from "@/components/shared/Image";
import checkHomeId from "../../helpers/checkHomeId";
import NotFoundPage from "../NotFound.page";

export default function TourDetailsPage() {
	const { id } = useParams();
	const validId = checkHomeId(id);
	if (!validId) return <NotFoundPage />;

	return (
		<div>
			<header>
				<h1>Model Home #{validId}</h1>
				<Image homeId={validId} imageId={`${validId}-1`} isHero />
			</header>
			<HomeDetails id={validId} />
		</div>
	);
}
