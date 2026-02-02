import { ChevronRightIcon, Menu } from "lucide-react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import type { Link } from "@/types/types";

interface Props {
	links: Link[];
}

/** Render trigger button and drawer with nav. */
export default function MobileNav({ links }: Props) {
	return (
		<div className="flex flex-wrap gap-2 sm:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]">
					<nav>
						<SheetHeader className="my-12">
							<SheetTitle>
								Model Homes of the Golden Gate International Exposition, 1939-40
							</SheetTitle>
							<SheetDescription className="sr-only">
								Navigation links
							</SheetDescription>
						</SheetHeader>
						<ul className="no-scrollbar overflow-y-auto px-4">
							{links.map((link) => {
								return (
									<li key={link.label}>
										<Item>
											<SheetClose asChild>
												<NavLink to={link.href} className="w-full">
													<ItemContent className="flex items-center justify-between">
														<ItemTitle>{link.label}</ItemTitle>
														<ChevronRightIcon className="size-5" />
													</ItemContent>
												</NavLink>
											</SheetClose>
										</Item>
									</li>
								);
							})}
						</ul>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}
