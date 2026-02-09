import { IMG_TYPES, IMG_WIDTHS } from "@/constants/constants";
import type { SrcSets } from "@/types/types";

/** Create srcset strings for Image component. */
export default function createSrcSets(baseUrl: string) {
	const srcSets: SrcSets = { avif: "", webp: "" };

	for (const format of IMG_TYPES) {
		let srcSet = "";

		for (let i = 0; i < IMG_WIDTHS.length; i++) {
			const width = IMG_WIDTHS[i];
			const fullUrl = `${baseUrl}@${width}.${format}`;
			srcSet += `${fullUrl} ${width}w`;
			if (i < IMG_WIDTHS.length - 1) srcSet += ", ";
		}

		srcSets[format] = srcSet;
	}

	return srcSets;
}
