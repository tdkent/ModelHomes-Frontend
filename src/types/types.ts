export interface Link {
	label: string;
	href: string;
}

export interface ModelHome {
	id: number;
	city: string;
	county: string;
	neighborhood_district: string;
	architect: string;
	architectural_style: string;
	interior_decorator: string;
	value_original: number;
	value_current: number;
	notes: string;
	images: {
		thumbnail: string;
		gallery: string[];
	};
}

export interface SrcSets {
	avif: string;
	webp: string;
}
