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
		<NavigationMenu className="max-md:hidden">
			<NavigationMenuList>
				{navLinks.map((link) => {
					return (
						<NavigationMenuItem key={link.label}>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<NavLink to={link.href} data-testid={`${link.testId}-link`}>
									{link.label}
								</NavLink>
							</NavigationMenuLink>
						</NavigationMenuItem>
					);
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
