import { works } from '$lib/data/works.js';

const works_index = works.map(({ slug, name }) => ({ slug, name }));

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	return {
		works_index,
		title: 'Works'
	};
}
