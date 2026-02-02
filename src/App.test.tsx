import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "./App";

/**
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */
describe("App root layer", () => {
	it("renders Index page at /", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>,
		);

		expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
	});

	it("renders About page at /about", () => {
		render(
			<MemoryRouter initialEntries={["/about"]}>
				<App />
			</MemoryRouter>,
		);

		expect(screen.getByRole("heading", { name: "About" })).toBeInTheDocument();
	});

	it("renders Homes page at /homes", () => {
		render(
			<MemoryRouter initialEntries={["/homes"]}>
				<App />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { name: "Index of Model Houses" }),
		).toBeInTheDocument();
	});

	it("renders Single Home page with correct ID at /homes/5", () => {
		render(
			<MemoryRouter initialEntries={["/homes/5"]}>
				<App />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { name: "Model Home No. 5" }),
		).toBeInTheDocument();
	});

	it("renders 404 page if home ID is not valid", () => {
		render(
			<MemoryRouter
				initialEntries={[
					"/homes/bad-route",
					"/homes/-1",
					"/homes/13",
					"/homes/22",
				]}
			>
				<App />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { name: "404 - Page Not Found" }),
		).toBeInTheDocument();
	});

	it("renders 404 page at unknown routes", () => {
		render(
			<MemoryRouter initialEntries={["/bad-route"]}>
				<App />
			</MemoryRouter>,
		);

		expect(
			screen.getByRole("heading", { name: "404 - Page Not Found" }),
		).toBeInTheDocument();
	});
});

/** Test primary navigation elements. */
describe("Root nav element", () => {
	const user = userEvent.setup();

	it("navigates from Home to About using mobile nav", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /about/i }));

		expect(
			await screen.findByRole("heading", { name: /about/i }),
		).toBeInTheDocument();
	});

	it("navigates from Home to About using desktop nav", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("link", { name: /about/i }));
		expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
	});

	it("navigates from About to Model Houses using mobile nav", async () => {
		render(
			<MemoryRouter initialEntries={["/about"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /model houses/i }));

		expect(
			await screen.findByRole("heading", { name: /index of model houses/i }),
		).toBeInTheDocument();
	});

	it("navigates from Model Houses to Home using desktop nav", async () => {
		render(
			<MemoryRouter initialEntries={["/homes"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("link", { name: /home/i }));
		expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
	});

	it("navigates from House to Model Houses using mobile nav", async () => {
		render(
			<MemoryRouter initialEntries={["/homes/1"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /model houses/i }));

		expect(
			await screen.findByRole("heading", { name: /model houses/i }),
		).toBeInTheDocument();
	});

	it("navigates from Not Found to Home using desktop nav", async () => {
		render(
			<MemoryRouter initialEntries={["/bad-route"]}>
				<App />
			</MemoryRouter>,
		);

		await user.click(screen.getByRole("link", { name: /home/i }));
		expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
	});
});
