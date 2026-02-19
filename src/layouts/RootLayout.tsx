import { Outlet } from "react-router";
import Header from "@/components/layout/Header";
export default function RootLayout() {
	return (
		<>
			<div>
				<Header />
				<main>
					<Outlet />
				</main>
				<footer>© 2026. All rights reserved.</footer>
			</div>
		</>
	);
}
