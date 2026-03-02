import { Menu, Minus } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Shelf from "@/components/layout/nav/Shelf";
import { Button } from "@/components/ui/button";

/** Render trigger button and drawer with nav. */
export default function MobileNav() {
	const [showShelf, setShowShelf] = useState(false);

	const container = document.querySelector("#container") as Element;

	useEffect(() => {
		if (container) {
			if (showShelf) container.classList.add("fixed");
			else container.classList.remove("fixed");
		}
	}, [container, showShelf]);

	return (
		<>
			<Button variant="ghost" onClick={() => setShowShelf((prev) => !prev)}>
				{showShelf ? (
					<Minus className="size-6 stroke-2" />
				) : (
					<Menu className="size-6 stroke-2" />
				)}
			</Button>
			{showShelf && createPortal(<Shelf />, container)}
		</>
	);
}
