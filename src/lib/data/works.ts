import fs from 'fs';
import workRows from '$lib/data/works.csv';
import { slugify, pluck } from '$lib/js/helpers.js';

const img_base = '/src/lib/assets/works';

const isProduction = process.env.NODE_ENV === 'production';

workRows.forEach((work) => {
	const slug = slugify(work.name);
	work.slug = slug;

	// TODO when this is fix hopefully can remove this
	// https://github.com/sveltejs/kit/issues/3535
	const rel_base = '../../..' + (isProduction ? '/..' : '');
	const path = new URL(`${rel_base}${img_base}/${slug}/`, import.meta.url).pathname;
	work.images = fs.readdirSync(path);
});

export const works = workRows;
export const works_by_slug = new Map(works.map((d) => [d.slug, d]));

const work_images_raw = import.meta.glob('$lib/assets/works/**/*.jpg', {
	query: { w: 1200, h: 900, format: 'webp', as: 'metadata' },
});

const keys = Object.keys(work_images_raw);

const work_image_imports = keys.map((k) => work_images_raw[k]());

export const load_work_images = Promise.all(work_image_imports).then((image_imports) => {
	return new Map(
		image_imports.map((img, i) => {
			const key = keys[i].replace(img_base, '');
			const values = pluck(img.default, 'src', 'width', 'height');
			return [key, values];
		}),
	);
});
