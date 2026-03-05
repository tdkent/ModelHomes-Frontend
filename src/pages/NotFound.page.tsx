import { useEffect } from "react";

export default function NotFoundPage() {
	useEffect(() => {
		document.title =
			"Page Not Found | Model Homes of the San Francisco International Exposition";
	}, []);

	return (
		<>
			<h2>404 - Page Not Found</h2>
			<p>Return home</p>
		</>
	);
}
