import { useLocation } from "react-router";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	return (
		<>
			<header
				className={`${isHome && "bg-[url(/img/ggie-ti-postcard@1280.jpeg)] bg-position-[35%_center] bg-no-repeat bg-cover w-full h-screen"}`}
			>
				<div className="w-full h-full backdrop-blur-[2px] px-4 py-4">
					<div className="flex items-center justify-between text-background">
						<div className="font-heading text-xl">g.g.i.e. model homes</div>
						<Navigation />
					</div>
					{isHome && (
						<div className="flex mt-28 h-full">
							<h1 className="text-background text-[44px] font-heading font-bold leading-12">
								Model Homes
								<span className="text-3xl block my-2">of the</span>
								Golden Gate International Exposition
								<span className="text-3xl block mt-4">1939-40</span>
							</h1>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
