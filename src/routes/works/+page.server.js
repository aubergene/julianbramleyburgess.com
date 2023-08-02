import { works, load_work_images } from '$lib/data/works.js';
import { pluck } from '$lib/js/helpers.js';

const works_index = works.map((work) => pluck(work, 'slug', 'name', 'images'));

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const work_images = await load_work_images;

	return {
		works_index,
		title: 'Works',
		work_images
	};
}
