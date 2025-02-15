import { works_by_slug, load_work_images } from '$lib/data/works.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const work = works_by_slug.get(slug);
	const work_images = await load_work_images;

	return {
		slug,
		work,
		title: work.name,
		work_images,
	};
};
