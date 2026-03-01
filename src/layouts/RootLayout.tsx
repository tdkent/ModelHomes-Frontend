import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
export default function RootLayout() {
	return (
		<>
			<div>
				<Header />
				<main className="mx-4 my-10">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}
