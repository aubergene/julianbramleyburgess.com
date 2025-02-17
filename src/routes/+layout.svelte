<script lang="ts">
	import { page } from '$app/state';
	import '@fontsource/roboto-condensed/300.css';
	import '@fontsource/roboto-condensed/400.css';
	import '../app.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { to_sentence, site_name } from '$lib/js/helpers.js';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const PROJECT_ID = '4cb076b9-b8ef-4d36-bc1e-fcdcd002408c';
</script>

<svelte:head>
	<title>
		{to_sentence([page.data.title, site_name], {
			two_words_connector: ' | ',
		})}
	</title>
</svelte:head>

<header>
	<Nav />
</header>

{@render children?.()}

<Footer />

<!-- svelte-ignore a11y_missing_attribute -->
<img src="https://app.piratepx.com/ship?p={PROJECT_ID}&i={page.url.pathname}" />
