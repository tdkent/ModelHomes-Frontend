import type { Dispatch, SetStateAction } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface Props {
	setSortOption: Dispatch<SetStateAction<"id" | "city">>;
}

export default function SortList({ setSortOption }: Props) {
	return (
		<>
			<label htmlFor="sort-homes" className="flex items-center gap-2">
				Sort homes by:
				<Select
					defaultValue="id"
					onValueChange={(value: "id" | "city") => setSortOption(value)}
				>
					<SelectTrigger className="w-45">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="id">Number</SelectItem>
							<SelectItem value="city">City</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</label>
		</>
	);
}
