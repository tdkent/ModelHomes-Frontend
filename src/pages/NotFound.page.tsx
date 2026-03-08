import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

export default function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>
					Page Not Found | Model Homes of the San Francisco International
					Exposition
				</title>
			</Helmet>
			<section className="content">
				<h1>404 - Page Not Found</h1>
				<p>The requested page could not be found.</p>
				<Link to="/">Return Home</Link>
			</section>
		</>
	);
}
