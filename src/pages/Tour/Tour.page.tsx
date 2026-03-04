import TourList from "@/components/pages/Tour/TourList";
import TextHeading from "@/components/shared/TextHeader";

export default function TourPage() {
	return (
		<div className="content flex flex-col gap-10 lg:gap-20">
			<h1>Model Home Tour</h1>
			<section>
				<TextHeading element="h2" text="Introduction" />
				<p>
					Twenty-eight homes are included in this tour, numbered from 1 to 30.
					There were no homes designated #13 (superstition?) or #22 (who
					knows?). There was a Model Home #31 but it is not included in this
					discussion because it is not actually located in the Bay Area, but in
					relatively remote Santa Cruz.
				</p>
			</section>
			<section>
				<TextHeading element="h2" text="Index of Model Homes" />
				<TourList />
			</section>
		</div>
	);
}
