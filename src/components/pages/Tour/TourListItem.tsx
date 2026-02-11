import { Link } from "react-router";
import Thumbnail from "@/components/pages/Tour/Thumbnail";
import type { ModelHome } from "@/types/types";

interface Props {
	home: ModelHome;
}

export default function TourListItem({ home }: Props) {
	const id = home.id;
	return (
		<li>
			<Link to={`/homes/${id}`} aria-label={`Home ${id}`}>
				<div className="flex gap-4 p-4">
					<Thumbnail id={id} imgId={home.images.thumbnail} />
					<div className="flex flex-col">
						<span>Model Home #{id}</span>
						<span>City: {home.city}</span>
						<span>County: {home.county}</span>
					</div>
				</div>
			</Link>
		</li>
	);
}
