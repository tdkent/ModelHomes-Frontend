import { useParams } from "react-router";
import checkHomeId from "../../helpers/checkHomeId";
import NotFoundPage from "../NotFound.page";

export default function SingleHomePage() {
	const { id } = useParams();

	const isValidId = checkHomeId(id);

	if (!isValidId) return <NotFoundPage />;

	return (
		<>
			<h2>Model Home No. {id}</h2>
		</>
	);
}
