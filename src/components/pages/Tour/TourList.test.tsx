import { screen } from "@testing-library/react";
import TourList from "@/components/pages/Tour/TourList";
import { renderWithClient } from "@/test/render";

// import userEvent from "@testing-library/user-event";

describe("TourList component", () => {
	it("gets a list of homes", async () => {
		// const user = userEvent.setup();
		renderWithClient(<TourList />, ["/homes"]);

		// Test loading state
		expect(screen.getByTestId(/loading-skeleton/i)).toBeInTheDocument();

		const list = await screen.findByRole("list"); // nav list will interfere?

		expect(list).toBeInTheDocument();
		expect(list.childElementCount).toBe(2);

		expect(await screen.findByText(/model home #1/i)).toBeInTheDocument();
		expect(await screen.findByText(/model home #2/i)).toBeInTheDocument();

		// Test navigate to correct Tour Details page
		// const listItem = await screen.findByText(/model home #1/i);
		// user.click(listItem);

		// expect(
		// 	screen.getByRole("heading", { name: /model home #1/i }),
		// ).toBeInTheDocument();
	});
});
