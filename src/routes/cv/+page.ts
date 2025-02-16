import { exhibitions } from '$lib/data/exhibitions';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'CV',
		exhibitions,
	};
};
