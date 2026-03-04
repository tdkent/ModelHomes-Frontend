import Navigation from "@/components/layout/Navigation";

export default function Header() {
	return (
		<>
			<header
				className={`absolute top-0 right-0 flex items-center justify-center z-50 w-full min-h-16 bg-transparent px-4 py-6 lg:text-background`}
			>
				<div className="flex items-center justify-between bg-white rounded-2xl px-4 w-full sm:py-2 sm:px-8 lg:bg-transparent lg:p-8">
					<div className="font-sans text-lg sm:text-2xl md:text-2xl">
						g.g.i.e. model homes
					</div>
					<Navigation />
				</div>
			</header>
		</>
	);
}
