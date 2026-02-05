import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SITE_NAME } from "@/constants/constants";
import { renderWithClient } from "@/test/render";
import App from "./App";

/**
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */
describe("App root layer", () => {
	it("renders Index page at /", async () => {
		renderWithClient(<App />, ["/"]);

		expect(
			screen.getByRole("heading", {
				name: SITE_NAME,
			}),
		).toBeInTheDocument();
	});

	it("renders About page at /about", () => {
		renderWithClient(<App />, ["/about"]);

		expect(
			screen.getByRole("heading", { name: /about this website/i }),
		).toBeInTheDocument();
	});

	it("renders Tour page at /homes", () => {
		renderWithClient(<App />, ["/homes"]);

		expect(
			screen.getByRole("heading", { name: /model home tour/i }),
		).toBeInTheDocument();
	});

	it("renders Tour Details page with correct ID at /homes/5", () => {
		renderWithClient(<App />, ["/homes/5"]);

		expect(
			screen.getByRole("heading", { name: /model home no. 5/i }),
		).toBeInTheDocument();
	});

	it("renders 404 page if home ID is not valid", () => {
		renderWithClient(<App />, [
			"/homes/bad-route",
			"/homes/-1",
			"/homes/13",
			"/homes/22",
		]);

		expect(
			screen.getByRole("heading", { name: /404 - page not found/i }),
		).toBeInTheDocument();
	});

	it("renders 404 page at unknown routes", () => {
		renderWithClient(<App />, ["/bad-route"]);

		expect(
			screen.getByRole("heading", { name: /404 - page not found/i }),
		).toBeInTheDocument();
	});
});

/** Test primary navigation elements. */
describe("Root nav element", () => {
	const user = userEvent.setup();

	it("navigates from Home to About using mobile nav", async () => {
		renderWithClient(<App />, ["/"]);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /about/i }));

		expect(
			await screen.findByRole("heading", { name: /about this website/i }),
		).toBeInTheDocument();
	});

	it("navigates from Home to About using desktop nav", async () => {
		renderWithClient(<App />, ["/"]);

		await user.click(screen.getByRole("link", { name: /about/i }));
		expect(
			screen.getByRole("heading", { name: /about this website/i }),
		).toBeInTheDocument();
	});

	it("navigates from About to Tour using mobile nav", async () => {
		renderWithClient(<App />, ["/about"]);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /model home tour/i }));

		expect(
			await screen.findByRole("heading", { name: /model home tour/i }),
		).toBeInTheDocument();
	});

	it("navigates from Tour to Home using desktop nav", async () => {
		renderWithClient(<App />, ["/homes"]);

		await user.click(screen.getByRole("link", { name: "Home" }));
		expect(
			screen.getByRole("heading", {
				name: SITE_NAME,
			}),
		).toBeInTheDocument();
	});

	it("navigates from Tour Details to Tour using mobile nav", async () => {
		renderWithClient(<App />, ["/homes/1"]);

		await user.click(screen.getByRole("button"));
		await user.click(screen.getByRole("link", { name: /model home tour/i }));

		expect(
			await screen.findByRole("heading", { name: /model home tour/i }),
		).toBeInTheDocument();
	});

	it("navigates from Not Found to Home using desktop nav", async () => {
		renderWithClient(<App />, ["/bad-route"]);

		await user.click(screen.getByRole("link", { name: "Home" }));
		expect(
			screen.getByRole("heading", {
				name: SITE_NAME,
			}),
		).toBeInTheDocument();
	});
});
