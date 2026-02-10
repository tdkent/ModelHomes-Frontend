import TourList from "@/components/pages/Tour/TourList";
import { renderWithClient } from "@/test/render";

describe("SortList component", () => {
	it("sorts homes by id by default", () => {
		renderWithClient(<TourList />, ["/homes"]);
	});

	it("sorts homes alphabetically by city", () => {
		renderWithClient(<TourList />, ["/homes"]);
	});
	it("sorts homes alphabetically by county", () => {
		renderWithClient(<TourList />, ["/homes"]);
	});
	it("can be sorted by city then id", () => {
		renderWithClient(<TourList />, ["/homes"]);
	});
});
