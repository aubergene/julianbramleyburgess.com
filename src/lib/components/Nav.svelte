<script>
	import NavLink from './NavLink.svelte';
</script>

<nav class="navbar" aria-label="main navigation">
	<div class="container is-max-desktop">
		<div class="navbar-brand">
			<span
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</span>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<NavLink href="/">About</NavLink>
				<NavLink href="/cv">CV</NavLink>
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
