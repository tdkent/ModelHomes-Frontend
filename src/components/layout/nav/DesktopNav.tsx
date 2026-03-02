import { NavLink } from "react-router";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/navLinks";

/** Render list of navigation links. */
export default function DesktopNav() {
	return (
		<NavigationMenu className="max-sm:hidden">
			<NavigationMenuList>
				{navLinks.map((link) => {
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
