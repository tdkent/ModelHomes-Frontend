import { NavLink } from "react-router";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { Link } from "@/types/types";

interface Props {
	links: Link[];
}

/** Render list of navigation links. */
export default function DesktopNav({ links }: Props) {
	return (
		<NavigationMenu className="max-sm:hidden">
			<NavigationMenuList>
				{links.map((link) => {
					return (
						<NavigationMenuItem key={link.label}>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<NavLink to={link.href}>{link.label}</NavLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
