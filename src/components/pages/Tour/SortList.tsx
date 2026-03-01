import type { Dispatch, SetStateAction } from "react";
import { type SortOptions, sortOptions } from "@/types/types";

interface Props {
	setSortOption: Dispatch<SetStateAction<SortOptions>>;
}

/**
 * Select element that sorts homes.
 * Compose with HTML instead of shadcn to simplify testing.
 */
export default function SortList({ setSortOption }: Props) {
	return (
		<div className="flex items-center gap-2 border rounded-lg bg-slate-50 my-4 px-4 py-2.5">
			<label htmlFor="sort-homes">Sort by</label>
			<select
				id="sort-homes"
				className="border rounded-md p-2 bg-background"
				defaultValue={sortOptions[0]}
				onChange={(e) => setSortOption(e.currentTarget.value as SortOptions)}
			>
				{sortOptions.map((opt) => {
					return (
						<option key={opt} value={opt}>
							{opt}
						</option>
					);
				})}
			</select>
		</div>
	);
}
