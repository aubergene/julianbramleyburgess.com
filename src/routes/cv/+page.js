/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/data/exhibitions.csv`);
	const exhibitionsCsv = await res.text();

	return { exhibitionsCsv };
}
