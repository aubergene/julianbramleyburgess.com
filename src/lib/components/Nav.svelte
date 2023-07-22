<script>
	import NavLink from './NavLink.svelte';

	let burgerActive = false;

	function closeBurger() {
		burgerActive = false;
	}
</script>

<svelte:window on:click={closeBurger} />

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="container is-max-desktop">
		<div class="navbar-brand">
			<NavLink href="/">About</NavLink>
			<NavLink href="/works">Works</NavLink>
			<NavLink href="/cv">CV</NavLink>
			<NavLink href="/contact">Contact</NavLink>
			<NavLink href="https://www.instagram.com/julianbramleyburgess/">
				<img src="/instagram.svg" alt="Instagram" style="opacity: 0.3" />
			</NavLink>
		</div>
	</div>
</nav>

<style>
	.navbar {
		font-family: 'Roboto Condensed', sans-serif;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
	}
</style>
