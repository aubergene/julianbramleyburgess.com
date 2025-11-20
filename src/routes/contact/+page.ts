import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		title: 'Contact',
		description: 'How to get in touch with Julian Bramley Burgess.',
	};
};
