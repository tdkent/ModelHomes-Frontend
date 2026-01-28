import { Route, Routes as RouteGroup } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About/About.page";
import HomesPage from "../pages/Homes/Homes.page";
import IndexPage from "../pages/Index/Index.pages";
import SingleHomePage from "../pages/SingleHome/SingleHome.page";

export default function Routes() {
	return (
		<>
			<RouteGroup>
				<Route element={<RootLayout />}>
					<Route index element={<IndexPage />} />
					<Route element={<AboutPage />} path="/about" />
					<Route element={<HomesPage />} path="/homes" />
					<Route element={<SingleHomePage />} path="/homes/:id" />
				</Route>
			</RouteGroup>
		</>
	);
}
