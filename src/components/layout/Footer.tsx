import { Link } from "react-router";
import { navLinks } from "@/lib/navLinks";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-center items-center font-sans gap-10 border-t px-6 pt-6 pb-12 text-sm bg-slate-50 text-center lg:text-base lg:py-12">
			<ul className="flex flex-col gap-4">
				{navLinks.map((link) => {
					return (
						<li key={link.label}>
							<Link to={link.href}>{link.label}</Link>
						</li>
					);
				})}
			</ul>
			<span>
				Header image:{" "}
				<a
					href="https://commons.wikimedia.org/wiki/File:Treasure_Island,_Golden_Gate_International_Exposition,_1938_-_Linen_Postcard_(4253084805).jpg"
					target="_blank"
					rel="noreferrer"
				>
					Steve Shook from Moscow, Idaho, USA
				</a>
				, <a href="https://creativecommons.org/licenses/by/2.0">CC BY 2.0</a>,
				via Wikimedia Commons
			</span>
			<span>© 2026. All rights reserved.</span>
		</footer>
	);
}
