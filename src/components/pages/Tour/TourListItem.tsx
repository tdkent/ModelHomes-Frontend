import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ModelHome } from "@/types/types";

interface Props {
	home: ModelHome;
}

export default function TourListItem({ home }: Props) {
	return (
		<li>
			<Link to={`/homes/${home.id}`} aria-label={`View Model Home ${home.id}`}>
				<div className="flex gap-4 p-4">
					<Avatar className="size-10">
						<AvatarImage src="https://github.com/evilrabbit.png" />
						<AvatarFallback>#{home.id}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<span>Model Home #{home.id}</span>
						<span>{home.city}</span>
					</div>
				</div>
			</Link>
		</li>
	);
}
