import { ChevronRightIcon } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { NavLink } from "react-router";
import { homeIds, navLinks } from "@/lib/navLinks";

interface Props {
	instantClose: boolean;
	setInstantClose: Dispatch<SetStateAction<boolean>>;
	showShelf: boolean;
	setShowShelf: Dispatch<SetStateAction<boolean>>;
}

/** Shelf component for mobile navigation. */
export default function Shelf({
	instantClose,
	setInstantClose,
	showShelf,
	setShowShelf,
}: Props) {
	const [showHomes, setShowHomes] = useState(false);

	function handleClick() {
		setShowShelf(false);
		setShowHomes(false);
		setInstantClose(true);
	}

	return (
		<div
			inert={!showShelf}
			className={`fixed top-0 right bg-white w-full h-screen z-40 ${instantClose ? "" : "transition-all duration-400"} ${showShelf ? "opacity-100" : "opacity-0"}`}
		>
			<div className="w-full h-full flex-1 px-4 pt-16 pb-8 flex flex-col">
				<nav className="flex-1 min-h-0">
					<ul className="flex flex-col h-full min-h-0 divide-y text-xl pt-8">
						{navLinks.map((link) => {
							return (
								<li key={link.label} className="py-4">
									<NavLink
										to={link.href}
										className="w-full"
										onClick={handleClick}
									>
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
									Model Homes
									<ChevronRightIcon
										className={`size-4 text-blue-600 transition ${showHomes ? "rotate-90" : "rotate-0"}`}
									/>
								</div>
							</button>

							<ul
								inert={!showHomes}
								className={`mask-t-from-90% mask-b-from-90% flex-1 min-h-0 overflow-y-auto divide-y text-lg mt-4 px-4 transition duration-300 ${showHomes ? "opacity-100" : "opacity-0"}`}
							>
								{homeIds.map((id) => (
									<li
										key={id}
										className={`transition-all duration-300 ${showHomes ? "py-3" : "py-0"}`}
									>
										<NavLink to={`/homes/${id}`} onClick={handleClick}>
											<div className="flex items-center justify-between">
												Home #{id}
												<ChevronRightIcon className="size-4 text-blue-600" />
											</div>
										</NavLink>
									</li>
								))}
							</ul>
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
