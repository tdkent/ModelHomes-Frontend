import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout() {
	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preload"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
				/>
			</Helmet>
			<div id="container" className="h-screen flex flex-col">
				<Header />
				<main className="flex-1 lg:flex lg:flex-col lg:items-center">
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	);
}
