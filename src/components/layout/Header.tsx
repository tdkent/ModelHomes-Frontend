import { useLocation } from "react-router";
import Navigation from "@/components/layout/Navigation";
import { SITE_NAME } from "@/constants/constants";

export default function Header() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	return (
		<>
			<header
				className={`py-4 px-6 ${isHome && "bg-[url(/img/ggie-ti-postcard@1280.jpeg)] bg-cover w-full aspect-square"}`}
			>
				<div className="flex items-center justify-between">
					<div className="font-heading uppercase text-2xl">g.g.i.e.m.h.</div>
					<Navigation />
				</div>
				{isHome && (
					<h1 className="text-background text-4xl font-heading">{SITE_NAME}</h1>
				)}
			</header>
		</>
	);
}
