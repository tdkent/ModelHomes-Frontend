import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router";
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
	});

	if (isPending) return <Loading />;

	if (error) return "An error occurred.";

	const home = data as ModelHome;

	const html = DOMPurify.sanitize(home.notes, {
		USE_PROFILES: { html: true },
	});

	const options: HTMLReactParserOptions = {
		replace(domNode) {
			if (
				"name" in domNode &&
				"children" in domNode &&
				"data" in domNode.children[0] &&
				domNode.name === "a"
			) {
				const href = domNode.attribs.href;
				const text = domNode.children[0].data;
				return <Link to={href}>{text}</Link>;
			}
		},
	};

	const parsedHtml = parse(html, options);

	return (
		<>
			<section>
				<h2>Home Details</h2>
				<dl>
					<div>
						<dt>City</dt>
						<dd>{home.city}</dd>
					</div>
					<div>
						<dt>County</dt>
						<dd>{home.county}</dd>
					</div>
					<div>
						<dt>Neighborhood/District</dt>
						<dd>{home.neighborhood_district}</dd>
					</div>
					<div>
						<dt>Architect</dt>
						<dd>{home.architect}</dd>
					</div>
				</dl>
			</section>
			<section>{parsedHtml}</section>
		</>
	);
}
