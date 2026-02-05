import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/DisplayError";
import Loading from "@/components/Loading";
import SortList from "@/components/pages/Tour/SortList";
import TourListItem from "@/components/pages/Tour/TourListItem";
import type { ModelHome } from "@/types/types";

export default function TourList() {
	const { isPending, error, data } = useQuery({
		queryKey: ["homes"],
		queryFn: () => httpRequest("/homes"),
	});

	if (isPending) return <Loading />;

	if (error) return <DisplayError error={error} />;

	const homes = data as ModelHome[];

	return (
		<>
			<SortList />
			<ul aria-label="List of model homes" className="divide-y">
				{homes.map((home) => {
					return <TourListItem key={home.id} home={home} />;
				})}
			</ul>
		</>
	);
}
