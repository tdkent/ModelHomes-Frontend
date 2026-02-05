import { BACKEND_URL } from "@/constants/constants";

export default async function httpRequest(path: string) {
	try {
		const response = await fetch(`${BACKEND_URL}${path}`);
		if (!response.ok) throw new Error("The server sent an error");
		return response.json();
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		throw new Error("An unknown error occurred.");
	}
}
