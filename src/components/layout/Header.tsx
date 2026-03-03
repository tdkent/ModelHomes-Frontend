import Navigation from "@/components/layout/Navigation";

export default function Header() {
	return (
		<>
			<header
				className={`absolute top-0 right-0 flex items-center justify-center z-50 w-full min-h-16 bg-transparent`}
			>
				<div className="w-fit flex items-center justify-between gap-16 bg-white rounded-2xl px-6">
					<div className="font-sans text-lg">g.g.i.e. model homes</div>
					<Navigation />
				</div>
			</header>
		</>
	);
}
