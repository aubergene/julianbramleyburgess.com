import { exhibitions } from '$lib/data/exhibitions';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'CV',
		description: 'Julian Bramley Burgess CV including exhibitions, education and residencies.',
		exhibitions,
	};
};
