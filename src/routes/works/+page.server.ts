import { works } from '$lib/data/works.js';

import type { PageServerLoad } from './$types';

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
