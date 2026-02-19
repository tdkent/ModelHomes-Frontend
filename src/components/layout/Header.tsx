import Navigation from "@/components/layout/Navigation";

export default function Header() {
	return (
		<>
			<header className="flex items-center justify-between py-4 px-6">
				<div className="font-heading uppercase text-2xl">g.g.i.e.m.h.</div>
				<Navigation />
			</header>
		</>
	);
}
