<script>
	import '@fontsource/roboto-condensed';
	import '../app.scss';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<Nav />

<slot />

<Footer />
