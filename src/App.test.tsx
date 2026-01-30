import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";

/**
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */

describe("App.tsx component", () => {
	it("renders Index page at /", () => {
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
			screen.getByRole("heading", { name: "Index of Homes" }),
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
