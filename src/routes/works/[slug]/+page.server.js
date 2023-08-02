import { works_by_slug, load_work_images } from '$lib/data/works.js';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params;
	const work = works_by_slug.get(slug);
	const work_images = await load_work_images;

	return {
		slug,
		work,
		title: work.name,
		work_images
	};
}
