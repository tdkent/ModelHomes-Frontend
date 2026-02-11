import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";
import { renderWithClient } from "@/test/render";

describe("Tour page", () => {
	const user = userEvent.setup();
	it("renders loading component then a list with 3 items", async () => {
		renderWithClient(<App />, ["/homes"]);

		expect(screen.getByTestId(/loading-skeleton/i)).toBeInTheDocument();

		const list = await screen.findByRole("list", {
			name: /homes/i,
		});

		expect(list).toBeInTheDocument();
		expect(list.children.length).toBe(3);
	});

	it("renders a list with Model Home items", async () => {
		renderWithClient(<App />, ["/homes"]);

		const list = await screen.findByRole("list", {
			name: /homes/i,
		});

		const items = within(list);

		expect(items.getByText(/model home #1/i)).toBeInTheDocument();
		expect(items.getByText(/model home #2/i)).toBeInTheDocument();
		expect(items.getByText(/model home #3/i)).toBeInTheDocument();
	});

	it("renders links that navigate to correct Tour Details page", async () => {
		renderWithClient(<App />, ["/homes"]);

		await user.click(
			await screen.findByRole("link", {
				name: /home 1/i,
			}),
		);

		expect(
			screen.getByRole("heading", { name: /model home #1/i }),
		).toBeInTheDocument();
	});
});
