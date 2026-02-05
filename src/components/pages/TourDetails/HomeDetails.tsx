import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import Loading from "@/components/Loading";
import type { ModelHome } from "@/types/types";

interface Props {
	id: number;
}

export default function HomeDetails({ id }: Props) {
	const { isPending, error, data } = useQuery({
		queryKey: [`home-${id}`],
		queryFn: () => httpRequest(`/homes/${id}`),
		staleTime: 24 * 60 * 60 * 1000, // 1d
	});

	if (isPending) return <Loading />;

	if (error) return "An error occurred.";

	const home = data as ModelHome;
	return <>{home.city}</>;
}
