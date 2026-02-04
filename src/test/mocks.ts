import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { BACKEND_URL } from "@/constants/constants";
import type { ModelHome } from "@/types/types";

export const mockedHomesData: Pick<
	ModelHome,
	"id" | "city" | "county" | "architect"
>[] = [
	{
		id: 1,
		city: "City A",
		county: "County B",
		architect: "John Doe",
	},
	{
		id: 2,
		city: "Town C",
		county: "County D",
		architect: "Jane Smith",
	},
];

export const handlers = [
	http.get(`${BACKEND_URL}/homes`, () => {
		return HttpResponse.json(mockedHomesData);
	}),
];

export const server = setupServer(...handlers);
