import Image from "@/components/shared/Image";
import { SITE_NAME } from "@/constants/constants";

export default function Header() {
	return (
		<header>
			{/* <Image /> */}
			<h1>{SITE_NAME}</h1>
		</header>
	);
}
