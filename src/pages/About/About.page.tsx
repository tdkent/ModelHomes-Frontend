import TextHeading from "@/components/shared/TextHeader";

export default function AboutPage() {
	return (
		<div className="content">
			<section>
				<TextHeading element="h1" text="About this website" />
				<p>
					My wife and I enjoy self-guided walking tours, whether they be nature
					treks, historical strolls, or architectural sojourns. Back in 2007 we
					were enjoying a walk of the architectural variety in a city on the San
					Francisco Peninsula when we came upon a house described in the booklet
					as a Model Home, constructed in conjunction with the Golden Gate
					International Exposition of 1939.
				</p>
				<p>
					We had certainly heard of the Exposition and had even visited some of
					its remaining structures on Treasure Island in San Francisco Bay, but
					we were totally unfamiliar with the Model Home program. Intrigued, we
					decided to do some research, and were delighted and somewhat surprised
					to find that all of these houses still seem to exist and were possible
					to locate, even with what was often somewhat sketchy information.
				</p>
				<p>This website is the result of our research and exploration.</p>
			</section>
		</div>
	);
}
