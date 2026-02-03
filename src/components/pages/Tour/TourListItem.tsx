import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/components/ui/item";

export default function TourListItem() {
	return (
		<Item variant="outline">
			<ItemMedia>
				<Avatar className="size-10">
					<AvatarImage src="https://github.com/evilrabbit.png" />
					<AvatarFallback>ER</AvatarFallback>
				</Avatar>
			</ItemMedia>
			<ItemContent>
				<ItemTitle>Evil Rabbit</ItemTitle>
				<ItemDescription>Last seen 5 months ago</ItemDescription>
			</ItemContent>
			<ItemActions>
				<Button
					size="icon-sm"
					variant="outline"
					className="rounded-full"
					aria-label="Invite"
				>
					Learn More
				</Button>
			</ItemActions>
		</Item>
	);
}
