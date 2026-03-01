import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router";
import httpRequest from "@/api/httpRequest";
import ImageGallery from "@/components/pages/TourDetails/ImageGallery";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import TextHeading from "@/components/shared/TextHeader";
import {
	calculateFOVI,
	convertToUSD,
	inflatedValueUSD,
} from "@/lib/saleValues";
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

	if (error) return <DisplayError error={error} />;

	const home = data as ModelHome;

	const {
		architect,
		city,
		county,
		images,
		neighborhood_district: neighDistrict,
		notes,
		value_current: currVal,
		value_original: origVal,
	} = home;

	const html = DOMPurify.sanitize(notes, {
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
		<div className="content flex flex-col gap-10">
			<section>
				<TextHeading element="h2" text="Location" />
				<dl>
					<div>
						<dt>City</dt>
						<dd>{city}</dd>
					</div>
					<div>
						<dt>County</dt>
						<dd>{county}</dd>
					</div>
					<div>
						<dt>Neighborhood/District</dt>
						<dd>{neighDistrict}</dd>
					</div>
				</dl>
			</section>
			<section>
				<TextHeading element="h2" text="Architecture" />
				<dl>
					<div>
						<dt>Architect</dt>
						<dd>{architect}</dd>
					</div>
				</dl>
			</section>
			<section>
				<TextHeading element="h2" text="Valuation" />
				<div>
					<dt>Original sale value (1939-40)</dt>
					<dd className={`${!origVal && "italic"}`}>
						{origVal ? convertToUSD(origVal) : "No info available"}
					</dd>
				</div>
				<div>
					<dt>Original value, inflation adjusted (2025)</dt>
					<dd className={`${!origVal && "italic"}`}>
						{origVal ? inflatedValueUSD(origVal) : "N/a"}
					</dd>
				</div>
				<div>
					<dt>Current sale value (estimated)</dt>
					<dd>{convertToUSD(currVal)}</dd>
				</div>
				<div>
					<dt>FOVI</dt>
					<dd className={`${!origVal && "italic"}`}>
						{origVal ? calculateFOVI(origVal, currVal) : "N/a"}
					</dd>
				</div>
			</section>
			<section>
				<TextHeading element="h2" text="Notes" />
				{parsedHtml}
			</section>
			<ImageGallery id={id} gallery={images.gallery} city={home.city} />
		</div>
	);
}
