import type { ModelHome } from "@/types/types";

export default function sortHomes(homes: ModelHome[], sortBy: "id" | "city") {
	const homesCopy = [...homes];
	if (sortBy === "city") {
		return homesCopy.sort((a, b) => {
			return a.city.localeCompare(b.city) || a.id - b.id;
		});
	}

	return homesCopy.sort((a, b) => a.id - b.id);
}
