import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { BACKEND_URL } from "@/constants/constants";
import type { ModelHome } from "@/types/types";

export const mockedHomesData: Pick<
	ModelHome,
	"id" | "city" | "county" | "architect" | "images"
>[] = [
	{
		id: 1,
		city: "City A",
		county: "County B",
		architect: "Art Vandelay",
		images: {
			gallery: ["1-1", "1-2"],
			thumbnail: "1-1",
		},
	},
	{
		id: 2,
		city: "Town C",
		county: "County D",
		architect: "A.G. Pennypacker",
		images: {
			gallery: ["2-1", "2-2"],
			thumbnail: "2-1",
		},
	},
	{
		id: 3,
		city: "Village Z",
		county: "County S",
		architect: "Kel Varnsen",
		images: {
			gallery: ["3-1", "3-2"],
			thumbnail: "3-1",
		},
	},
];

export const handlers = [
	http.get(`${BACKEND_URL}/homes`, () => {
		return HttpResponse.json(mockedHomesData);
	}),
	http.get(`${BACKEND_URL}/homes/1`, () => {
		return HttpResponse.json(mockedHomesData[0]);
	}),
];

export const server = setupServer(...handlers);
