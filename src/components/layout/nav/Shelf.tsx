import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { homeIds, navLinks } from "@/lib/navLinks";

export default function Shelf() {
	const [showHomes, setShowHomes] = useState(false);
	return (
		<div className="fixed top-0 right bg-white w-full h-screen z-40">
			<div className="w-full h-full flex-1 px-4 pt-16 pb-8 flex flex-col">
				<nav className="flex-1 min-h-0">
					<ul className="flex flex-col h-full min-h-0 divide-y text-xl pt-8">
						{navLinks.map((link) => {
							return (
								<li key={link.label} className="py-4">
									<NavLink to={link.href} className="w-full">
										<div className="flex items-center justify-between">
											{link.label}
											<ChevronRightIcon className="size-4 text-blue-600" />
										</div>
									</NavLink>
								</li>
							);
						})}
						<li className="flex flex-col flex-1 min-h-0 py-4">
							<button
								className="w-full"
								onClick={() => setShowHomes((prev) => !prev)}
							>
								<div className="border-blue-200 flex items-center justify-between">
									Homes
									<ChevronRightIcon className="size-4 text-blue-600" />
								</div>
							</button>
							{showHomes && (
								<ul className="flex-1 min-h-0 overflow-y-auto divide-y text-lg mt-2">
									{homeIds.map((id) => (
										<li key={id} className="py-2.5">
											<NavLink to={`/homes/${id}`}>Home #{id}</NavLink>
										</li>
									))}
								</ul>
							)}
						</li>
					</ul>
				</nav>
				<div className="font-sans border-2 border-dotted p-2 rounded-lg text-base">
					Model Homes of the San Francisco International Exposition, 1939-40
				</div>
			</div>
		</div>
	);
}
