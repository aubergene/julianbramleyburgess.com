import { works, images_by_slug } from '$lib/data/works.js';

import { pluck } from '$lib/js/helpers.js';
import type { PageServerLoad } from './$types';

// const works_index = works.map((work) => pluck(work, 'slug', 'name', 'images'));
const works_index = works.map(({ slug, name, year, images }) => {
	const lead_img = images[0];
	return {
		slug,
		name,
		year,
		lead_img,
	};
});

export const load: PageServerLoad = async () => {
	return {
		works_index,
		title: 'Works',
	};
};
