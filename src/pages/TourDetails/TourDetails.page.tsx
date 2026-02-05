import { useParams } from "react-router";
import HomeDetails from "@/components/pages/TourDetails/HomeDetails";
import checkHomeId from "../../helpers/checkHomeId";
import NotFoundPage from "../NotFound.page";

export default function TourDetailsPage() {
	const { id } = useParams();
	const validId = checkHomeId(id);
	if (!validId) return <NotFoundPage />;

	return (
		<div>
			<h1>Model Home #{validId}</h1>
			<HomeDetails id={validId} />
		</div>
	);
}
