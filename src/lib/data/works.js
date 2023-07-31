import workRows from '$lib/data/works.csv';
import { slugify } from '$lib/helpers.js';

workRows.forEach((work) => {
	work.slug = slugify(work.name);
});

export const works = workRows;
export const works_by_slug = new Map(works.map((d) => [d.slug, d]));
