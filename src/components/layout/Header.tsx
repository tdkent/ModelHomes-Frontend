// import { useLocation } from "react-router";
import Navigation from "@/components/layout/Navigation";

export default function Header() {
	// const { pathname } = useLocation();
	// const isHome = pathname === "/";
	return (
		<>
			<header className="flex items-center justify-between z-50 w-full min-h-16 px-4 bg-green-500">
				<div className="font-sans text-xl">g.g.i.e. model homes</div>
				<Navigation />
			</header>
			{/* <header
				className={`${isHome && "bg-[url(/img/ggie-ti-postcard@1280.jpeg)] bg-position-[35%_center] bg-no-repeat bg-cover w-full h-screen"}`}
			>
				<div className="w-full h-full backdrop-blur-[2px]">
					<div
						className={`px-4 py-3 flex items-center justify-between ${isHome ? "text-background" : "text-foreground border-b"}`}
					>
						<div className="font-sans text-xl">g.g.i.e. model homes</div>
						<Navigation />
					</div>
					{isHome && (
						<div className="flex mt-28 h-full px-4">
							<h1 className="bg-linear-to-r from-yellow-100 to-blue-200 bg-clip-text text-transparent text-[44px] font-sans font-bold leading-12 opacity-90">
								Model Homes <span className="text-3xl block my-2">of the</span>{" "}
								Golden Gate International Exposition{" "}
								<span className="text-3xl block mt-4">1939-40</span>
							</h1>
						</div>
					)}
				</div>
			</header> */}
		</>
	);
}
