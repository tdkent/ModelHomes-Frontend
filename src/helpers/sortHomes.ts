import type { ModelHome, SortOptions } from "@/types/types";

export default function sortHomes(homes: ModelHome[], sortBy: SortOptions) {
	const homesCopy = [...homes];

	switch (sortBy) {
		case "City":
			return homesCopy.sort((a, b) => {
				return a.city.localeCompare(b.city) || a.id - b.id;
			});

		case "County":
			return homesCopy.sort((a, b) => {
				return a.county.localeCompare(b.county) || a.id - b.id;
			});

		default:
			return homesCopy.sort((a, b) => a.id - b.id);
	}
}
