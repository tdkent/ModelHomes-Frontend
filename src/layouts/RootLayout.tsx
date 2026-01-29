import React from "react";
import { Outlet } from "react-router";
export default function RootLayout() {
	return (
		<React.Fragment data-testid="root-layout">
			<header>
				<h1>
					Model Homes of the Golden Gate International Exposition, 1939-40
				</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>© 2026</footer>
		</React.Fragment>
	);
}
