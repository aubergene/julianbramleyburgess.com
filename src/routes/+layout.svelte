<script>
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<Header />
<Nav />

<slot />

<style>
	:global(.content, .title) {
		font-family: 'Roboto Condensed', sans-serif;
	}
</style>
