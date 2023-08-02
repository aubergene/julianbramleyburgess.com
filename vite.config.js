import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import dsv from '@rollup/plugin-dsv';

export default defineConfig({
	plugins: [sveltekit(), imagetools(), dsv()],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
});
