import { screen } from "@testing-library/react";
import TourDetailsPage from "@/pages/TourDetails/TourDetails.page";
import { renderWithClient } from "@/test/render";

describe("Tour Details page", () => {
	it("renders the correct details page", () => {
		renderWithClient(<TourDetailsPage />, ["/homes/10"]);
		expect(screen.getByRole("heading", { name: /model home #10/i }));
	});

	it("renders details about the home", () => {
		renderWithClient(<TourDetailsPage />, ["/homes/10"]);

		// check for section with correct city, architect, etc

		// check for section with rendered notes
	});
});
