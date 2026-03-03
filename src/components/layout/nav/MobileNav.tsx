import { Menu, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Shelf from "@/components/layout/nav/Shelf";
import { Button } from "@/components/ui/button";

/** Render trigger button and drawer with nav. */
export default function MobileNav() {
	const [showShelf, setShowShelf] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [container, setContainer] = useState<Element | null>(null);

	// Create portal on mount
	useEffect(() => {
		const rootContainer = document.querySelector("#container");
		if (rootContainer) {
			setMounted(true);
			setContainer(rootContainer);
		}
	}, []);

	// Body scroll lock
	useEffect(() => {
		if (container) {
			if (showShelf) container.classList.add("fixed");
			else container.classList.remove("fixed");
		}
	}, [container, showShelf]);

	return (
		<>
			<Button
				aria-label={`${showShelf ? "Hide" : "Show"} Nav Menu`}
				variant="ghost"
				onClick={() => setShowShelf((prev) => !prev)}
			>
				<Minus
					className={`absolute size-6 scale-x-125 stroke-2 transition-all duration-400 ${showShelf ? "opacity-100 rotate-45" : "opacity-0 rotate-0"}`}
				/>
				<Minus
					className={`absolute size-6 scale-x-125 stroke-2 transition-all duration-400 ${showShelf ? "opacity-100 -rotate-45" : "opacity-0 rotate-0"}`}
				/>
				<Menu
					className={`absolute size-6 stroke-2 transition-all duration-400 ${showShelf ? "opacity-0" : "opacity-100"}`}
				/>
			</Button>
			{mounted && container
				? createPortal(<Shelf showShelf={showShelf} />, container)
				: null}
		</>
	);
}
