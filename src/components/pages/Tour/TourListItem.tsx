import { ChevronRightIcon } from "lucide-react";
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
				<div className="flex items-center justify-between gap-4 px-4 py-2.5 text-slate-700">
					<div className="flex gap-5">
						<Thumbnail id={id} imgId={home.images.thumbnail} />
						<div className="flex flex-col font-sans">
							<span className="text-base">Model Home #{id}</span>
							<span className="text-sm">City: {home.city}</span>
							<span className="text-sm">County: {home.county}</span>
						</div>
					</div>
					<ChevronRightIcon className="stroke-1 size-6" />
				</div>
			</Link>
		</li>
	);
}
