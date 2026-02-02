import { Route, Routes as RouteGroup } from "react-router";
import RootLayout from "../layouts/RootLayout";
import AboutPage from "../pages/About/About.page";
import HomePage from "../pages/Home/Home.page";
import NotFoundPage from "../pages/NotFound.page";
import TourPage from "../pages/Tour/Tour.page";
import TourDetails from "../pages/TourDetails/TourDetails.page";

export default function Routes() {
	return (
		<>
			<RouteGroup>
				<Route element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route element={<AboutPage />} path="/about" />
					<Route element={<TourPage />} path="/homes" />
					<Route element={<TourDetails />} path="/homes/:id" />
					<Route element={<NotFoundPage />} path="*" />
				</Route>
			</RouteGroup>
		</>
	);
}
