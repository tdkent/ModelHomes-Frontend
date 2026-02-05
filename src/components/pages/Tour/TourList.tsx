import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import Loading from "@/components/Loading";
import TourListItem from "@/components/pages/Tour/TourListItem";
// import { BACKEND_URL } from "@/constants/constants";
import type { ModelHome } from "@/types/types";

export default function TourList() {
	const { isPending, error, data } = useQuery({
		queryKey: ["homes"],
		queryFn: () => httpRequest("/homes"),
	});

	if (isPending) return <Loading />;

	if (error) return "An error occurred.";

	const homes = data as ModelHome[];

	return (
		<>
			<ul aria-label="List of model homes" className="divide-y">
				{homes.map((home) => {
					return <TourListItem key={home.id} home={home} />;
				})}
			</ul>
		</>
	);
}
