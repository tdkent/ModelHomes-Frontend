import type { Dispatch, SetStateAction } from "react";
import { type SortOptions, sortOptions } from "@/types/types";

interface Props {
	setSortOption: Dispatch<SetStateAction<SortOptions>>;
}

/**
 * Select element that sorts homes.
 * @param param0
 * @returns
 */
export default function SortList({ setSortOption }: Props) {
	return (
		<div className="flex items-center gap-2 border my-4 p-4">
			<label htmlFor="sort-homes">Sort by</label>
			//? Compose with HTML instead of shadcn to simplify testing.
			<select
				id="sort-homes"
				className="border rounded-md p-2"
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
