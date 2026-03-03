import type { Link } from "@/types/types";

export const navLinks: Link[] = [
	{ label: "Home", href: "/", testId: "home" },
	{ label: "About", href: "/about", testId: "about" },
	{ label: "Home Tour", href: "/homes", testId: "homes" },
];

export const homeIds = Array.from(
	{ length: 30 },
	(_, index) => index + 1,
).filter((idx) => idx !== 13 && idx !== 22);
