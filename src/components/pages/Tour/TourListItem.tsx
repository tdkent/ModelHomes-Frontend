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
		<li className="even:bg-slate-50 group">
			<Link to={`/homes/${id}`} aria-label={`Home ${id}`}>
				<div className="flex items-center justify-between gap-4 px-4 py-2.5 text-slate-700 transition duration-150 hover:scale-[105%] sm:px-6 md:px-8 lg:py-3">
					<div className="flex gap-5 lg:gap-8 items-center">
						<Thumbnail id={id} imgId={home.images.thumbnail} />
						<div className="flex flex-col font-sans">
							<span className="text-base transition-colors duration-150 group-hover:text-blue-500 lg:text-lg">
								Model Home #{id}
							</span>
							<span className="text-sm lg:text-base">City: {home.city}</span>
							<span className="text-sm lg:text-base">
								County: {home.county}
							</span>
						</div>
					</div>
					<ChevronRightIcon className="stroke-1 size-6" />
				</div>
			</Link>
		</li>
	);
}
