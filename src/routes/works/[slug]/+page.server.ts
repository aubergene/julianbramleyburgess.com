import { work_by_slug, images_by_slug } from '$lib/data/works.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const work = work_by_slug(slug);

	if (!work) error(404);

	const work_images = await images_by_slug(slug);

	return {
		slug,
		work,
		title: work.name,
		work_images,
	};
};
