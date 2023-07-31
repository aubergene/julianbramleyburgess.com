import { works_by_slug } from '$lib/data/works.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params;
	const work = works_by_slug.get(slug);
	return {
		slug,
		work,
		title: work.name
	};
}
