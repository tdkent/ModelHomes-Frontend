const INFLATION_MULT = 22.85; // Jan 1940 - Jan 2025

/** Convert a value to USD currency format. */
export function convertToUSD(val: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(val);
}

/** Apply inflation multiplier to a value.  */
function adjustInflation(val: number) {
	return val * INFLATION_MULT;
}

/** Convert inflation adjust value to USD currency format. */
export function inflatedValueUSD(val: number) {
	return convertToUSD(adjustInflation(val));
}

/** Calculate FOVI (factor of valuation increase.) */
export function calculateFOVI(origVal: number, currVal: number) {
	const fovi = currVal / adjustInflation(origVal);
	return fovi.toFixed(2);
}
