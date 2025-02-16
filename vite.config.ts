import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import dsv from '@rollup/plugin-dsv';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), dsv()],
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,
			},
		},
	},
});
