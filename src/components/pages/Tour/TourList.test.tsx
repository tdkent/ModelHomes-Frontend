import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";
import { renderWithClient } from "@/test/render";

describe("TourList component", () => {
	it("gets a list of homes", async () => {
		const user = userEvent.setup();
		renderWithClient(<App />, ["/homes"]);

		expect(screen.getByTestId(/loading-skeleton/i)).toBeInTheDocument();

		const list = await screen.findByRole("list", {
			name: /list of model homes/i,
		});

		expect(list).toBeInTheDocument();
		expect(list.childElementCount).toBe(2);

		expect(await screen.findByText(/model home #1/i)).toBeInTheDocument();
		expect(await screen.findByText(/model home #2/i)).toBeInTheDocument();

		await user.click(
			await screen.findByRole("link", {
				name: /view model home 1/i,
			}),
		);

		expect(
			screen.getByRole("heading", { name: /model home no. 1/i }),
		).toBeInTheDocument();
	});
});
