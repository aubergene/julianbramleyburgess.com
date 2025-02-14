import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	runes: true,
	kit: {
		adapter: adapter(),
	},

	preprocess: [vitePreprocess({ script: true }), mdsvex()],

	extensions: ['.svelte', '.svx'],
};

export default config;
