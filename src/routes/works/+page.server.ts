import { works, load_work_images } from '$lib/data/works.js';
import { pluck } from '$lib/js/helpers.js';
import type { PageServerLoad } from './$types';

const works_index = works.map((work) => pluck(work, 'slug', 'name', 'images'));

export const load: PageServerLoad = async () => {
	const work_images = await load_work_images;

	return {
		works_index,
		title: 'Works',
		work_images,
	};
};
