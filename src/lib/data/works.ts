import workRows from '$lib/data/works.csv';
import { slugify } from '$lib/js/helpers.js';
import { basename } from 'path';
import type { Picture } from 'vite-imagetools';

interface Work {
	year: number;
	name: string;
	slug: string;
	parts: string;
	description: string;
	images: Picture[];
}

const work_images: Record<string, Picture> = import.meta.glob(
	'/src/lib/assets/works/*.{jpeg,jpg}',
	{
		eager: true,
		query: {
			enhanced: true,
		},
	},
);

const work_images_by_path = Object.entries(work_images).map(
	([path, img]) => [basename(path), img] as const,
);

// console.log(work_images_by_path);

export const images_by_slug = (slug: string) => {
	console.log(work_images_by_path);
	return work_images_by_path.filter(([path]) => path.startsWith(slug)).flatMap(([_, img]) => img);
};

// Convert parsed CSV rows to a typed array
export const works: Work[] = workRows.map((row) => {
	const slug = slugify(row.name);
	const images = images_by_slug(slug);

	return {
		slug,
		year: Number(row.year),
		name: row.name,
		parts: row.parts,
		description: row.description,
		images,
	};
});

const works_by_slug = new Map(works.map((d) => [d.slug, d]));

export const work_by_slug = (slug: string) => works_by_slug.get(slug);
