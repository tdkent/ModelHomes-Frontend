import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import TourPage from "@/pages/Tour/Tour.page";
import { mockedHomesData } from "@/test/mocks";

const queryClient = new QueryClient();

describe("Tour page", () => {
	// const user = userEvent.setup();
	it("fetches a list of homes", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<TourPage />
			</QueryClientProvider>,
		);

		// Test loading state
		expect(screen.getByTestId(/loading-skeleton/i)).toBeInTheDocument();

		const list = await screen.findByRole("list"); // nav list will interfere?
		expect(list).toBeInTheDocument();
		expect(list.childElementCount).toBe(3);

		expect(
			screen.getByRole("heading", { name: /model home no. 1/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /model home no. 2/i }),
		).toBeInTheDocument();

		expect(screen.getByText(mockedHomesData[0].city)).toBeInTheDocument();
		expect(screen.getByText(mockedHomesData[0].county)).toBeInTheDocument();
		expect(screen.getByText(mockedHomesData[0].architect)).toBeInTheDocument();

		// Test navigate to correct Tour Details page
	});
});
