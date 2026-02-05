import { screen } from "@testing-library/react";
import TourDetailsPage from "@/pages/TourDetails/TourDetails.page";
import { renderWithClient } from "@/test/render";

describe("Tour Details page", () => {
	it("renders the correct details page", () => {
		renderWithClient(<TourDetailsPage />, ["/homes/8"]);
		expect(screen.getByRole("heading", { name: /model home #8/i }));
	});

	it("renders correct details about the home", () => {
		renderWithClient(<TourDetailsPage />, ["/homes/8"]);
		expect(screen.getByText(/millbrae/i)).toBeInTheDocument();
		expect(screen.getByText(/san mateo/i)).toBeInTheDocument();
		expect(screen.getByText(/oscar r. thayer/i)).toBeInTheDocument();
	});
});
