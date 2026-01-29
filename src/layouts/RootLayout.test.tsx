import { render, screen } from "@testing-library/react";
import RootLayout from "./RootLayout";

describe("The root layout", () => {
	it("is rendered in the document", () => {
		render(<RootLayout />);
		screen.debug();
	});
});
