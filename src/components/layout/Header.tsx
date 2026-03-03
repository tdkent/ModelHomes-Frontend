import Navigation from "@/components/layout/Navigation";

export default function Header() {
	return (
		<>
			<header
				className={`absolute top-0 right-0 flex items-center justify-center z-50 w-full min-h-16 bg-transparent md:text-background`}
			>
				<div className="w-fit flex items-center justify-between gap-16 bg-white rounded-2xl px-6 sm:w-md md:w-full md:bg-transparent md:p-8 md:gap-0">
					<div className="font-sans text-lg md:text-2xl">
						g.g.i.e. model homes
					</div>
					<Navigation />
				</div>
			</header>
		</>
	);
}
