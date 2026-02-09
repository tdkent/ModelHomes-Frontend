import Image from "@/components/shared/Image";
import { ASSETS_URL, SITE_NAME } from "@/constants/constants";
import createSrcSets from "@/helpers/createSrcSet";

export default function Header() {
	const baseUrl = `${ASSETS_URL}/ggie/ggie-ti-postcard`;
	return (
		<header>
			<Image
				altText="Postcard of Golden Gate International Exposition, Treasure Island"
				aspectRatio="aspect-2/1"
				imgUrl={`${baseUrl}@1280.jpeg`}
				srcSets={createSrcSets(baseUrl)}
			/>
			<h1>{SITE_NAME}</h1>
		</header>
	);
}
