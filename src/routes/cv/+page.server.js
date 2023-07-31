import exhibitions from '$lib/data/exhibitions.csv';

/** @type {import('./$types').PageLoad} */
export async function load() {
	return {
		title: 'CV',
		exhibitions
	};
}
