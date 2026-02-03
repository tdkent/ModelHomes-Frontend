import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { BACKEND_URL } from "@/constants/constants";

export default function TourList() {
	const { isPending, error, data } = useQuery({
		queryKey: ["homes"],
		queryFn: async () => {
			const response = await fetch(`${BACKEND_URL}/homes`);
			return await response.json();
		},
		staleTime: 24 * 60 * 60 * 1000, // 1d
	});

	console.log(isPending, error, data);

	if (isPending) {
		return <Loading />;
	}

	return <>Tour List</>;
}
