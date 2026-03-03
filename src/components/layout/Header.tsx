import { useLocation } from "react-router";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	return (
		<>
			<header
				className={`absolute top-0 right-0 flex items-center justify-between z-50 w-full min-h-16 px-4 bg-transparent ${isHome ? "text-background" : "text-foreground"}`}
			>
				<div className="font-sans text-xl">g.g.i.e. model homes</div>
				<Navigation />
			</header>
		</>
	);
}
