import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import httpRequest from "@/api/httpRequest";
import SortList from "@/components/pages/Tour/SortList";
import TourListItem from "@/components/pages/Tour/TourListItem";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import sortHomes from "@/helpers/sortHomes";
import type { ModelHome } from "@/types/types";

export default function TourList() {
	const { isPending, error, data } = useQuery({
		queryKey: ["homes"],
		queryFn: () => httpRequest("/homes"),
	});

	const [sortOption, setSortOption] = useState<"id" | "city">("id");

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const homes = data as ModelHome[];
	const sorted = sortHomes(homes, sortOption);

	return (
		<>
			<SortList setSortOption={setSortOption} />
			<ul aria-label="List of model homes" className="divide-y">
				{sorted.map((home) => {
					return <TourListItem key={home.id} home={home} />;
				})}
			</ul>
		</>
	);
}
