import { Link } from "react-router";
import Header from "@/components/pages/Home/Header";

export default function HomePage() {
	return (
		<article>
			<Header />
			<section>
				<h2>The World's Fair</h2>
				<p>
					The Golden Gate International Exposition was a Worlds Fair which ran
					from February 18 through October 29 of 1939 and May 25 through
					September 29 of 1940. It was located on Treasure Island, an artificial
					land mass created by filling San Francisco Bay adjacent to the natural
					Yerba Buena Island.
				</p>
				<p>
					The theme of the exposition was "Pageant of the Pacific," and there
					were many educational, artistic, and frankly commercial exhibits.
					There was an amusement zone known as the "Gayway" ("gay" not having
					quite the same connotations in 1939 as it does in the Twenty-First
					Century!).
				</p>
			</section>
			<section>
				<h2>The Model Home Tour</h2>
				<p>
					One of the promotional schemes associated with the Exposition was the
					Model Home Tour. By 1939 the worst of the Great Depression was over
					and many families who had always rented were looking to buy their own
					home. Local real estate interests were, needless to say, anxious to
					promote this trend. The Model Home Tour was intended to introduce
					these potential buyers to houses in various new developments around
					the Bay Area, including the City of San Francisco, the San Francisco
					Peninsula, the East Bay, Marin County, and even faraway Santa Cruz.
				</p>
				<p>
					The houses were intended to be affordable by middle-income families,
					with prices raging from less than $5,000 to $15,000 ($115,000 and
					$345,000, respectively, in 2025) at the high end. Most of the homes
					ended up costing more than originally intended, perhaps due to
					architectural exuberance, and few if any would have been within the
					budgets of lower-income households.
				</p>
			</section>
			<section>
				<h2>The Architects</h2>
				<p>
					These homes were not intended to be "great" architecture, although
					some were designed by men of international repute, e.g. William
					Wurster (<Link to="/homes/4">#4</Link> and{" "}
					<Link to="/homes/7">#7</Link>) and Gardner Daily (
					<Link to="/homes/15">#15</Link>), while others had locally prominent
					architects, e.g. Birge Clark (<Link to="/homes/17">#17</Link> and
					Harold G. Stoner (<Link to="/homes/2">#2</Link> and{" "}
					<Link to="/homes/6">#6</Link>). But most were designed by men for
					which limited or no information is readily available.
				</p>
			</section>
		</article>
	);
}
