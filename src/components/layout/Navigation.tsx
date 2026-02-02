import DesktopNav from "@/components/layout/nav/DesktopNav";
import MobileNav from "@/components/layout/nav/MobileNav";
import type { Link } from "@/types/types";

const links: Link[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Model Home Tour", href: "/homes" },
];

/** Render nav elements based on CSS breakpoint. */
export default function Navigation() {
	return (
		<>
			<MobileNav links={links} />
			<DesktopNav links={links} />
		</>
	);
}
