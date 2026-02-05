import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function SortList() {
	return (
		<>
			<label htmlFor="sort-homes" className="flex items-center gap-2">
				Sort homes by:
				<Select defaultValue="number">
					<SelectTrigger className="w-45">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="number">Number</SelectItem>
							<SelectItem value="city">City</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</label>
		</>
	);
}
