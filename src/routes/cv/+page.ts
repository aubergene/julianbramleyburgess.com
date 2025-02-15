import exhibitions from '$lib/data/exhibitions.csv';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'CV',
		exhibitions,
	};
};
