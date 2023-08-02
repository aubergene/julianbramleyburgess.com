<script>
	import { page } from '$app/stores';
	import '@fontsource/roboto-condensed/300.css';
	import '../app.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { to_sentence, site_name } from '$lib/js/helpers.js';
</script>

<svelte:head>
	<title>
		{to_sentence([$page.data.title, site_name], {
			two_words_connector: ' | '
		})}
	</title>
</svelte:head>

<Nav />

<slot />

<Footer />
