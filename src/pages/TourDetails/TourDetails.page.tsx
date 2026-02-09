import { useParams } from "react-router";
import HomeDetails from "@/components/pages/TourDetails/HomeDetails";
import Image from "@/components/shared/Image";
import checkHomeId from "../../helpers/checkHomeId";
import NotFoundPage from "../NotFound.page";

export default function TourDetailsPage() {
	const { id } = useParams();
	const validId = checkHomeId(id);
	if (!validId) return <NotFoundPage />;

	const objPosition = validId === 3 && "object-top";

	return (
		<div>
			<header className="relative">
				<Image
					homeId={validId}
					imageId={`${validId}-1`}
					position={objPosition || ""}
					isHero
				/>
				<h1 className="absolute top-1/2 px-4 -translate-y-1/2 text-5xl text-white">
					Model Home #{validId}
				</h1>
			</header>
			<HomeDetails id={validId} />
		</div>
	);
}
