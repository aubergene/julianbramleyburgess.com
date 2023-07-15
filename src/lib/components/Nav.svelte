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
			<a
				on:click|stopPropagation={() => (burgerActive = !burgerActive)}
				role="button"
				class="navbar-burger"
				class:is-active={burgerActive}
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" class:is-active={burgerActive}>
			<div class="navbar-start">
				<NavLink href="/works">Works</NavLink>
				<NavLink href="/cv">CV</NavLink>
			</div>
		</div>

		<div class="navbar-end">
			<div class="navbar-item">
				<NavLink href="https://www.instagram.com/julianbramleyburgess/">
					<img src="/instagram.svg" alt="Instagram" />
				</NavLink>
			</div>
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
