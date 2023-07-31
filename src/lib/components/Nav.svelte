<script>
	import NavLink from './NavLink.svelte';

	let burgerActive = false;

	function toggle() {
		burgerActive = !burgerActive;
		console.log(burgerActive);
	}

	function closeBurger() {
		burgerActive = false;
	}
</script>

<svelte:window on:click={closeBurger} />

<nav class="navbar is-fixed-top" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<NavLink href="/">Julian Bramley Burgess</NavLink>
			<NavLink href="https://www.instagram.com/julianbramleyburgess/" classes="is-hidden-desktop">
				<img src="/instagram.svg" alt="Instagram" style="opacity: 0.4" />
			</NavLink>

			<span
				class="navbar-burger"
				aria-label="menu"
				aria-expanded={burgerActive}
				on:click|stopPropagation={toggle}
				on:keypress={toggle}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</span>
		</div>
		<div class="navbar-menu navbar-end" class:is-active={burgerActive}>
			<NavLink href="/">About</NavLink>
			<NavLink href="/works">Works</NavLink>
			<NavLink href="/cv">CV</NavLink>
			<NavLink href="/contact">Contact</NavLink>
			<NavLink href="https://www.instagram.com/julianbramleyburgess/">
				<img src="/instagram.svg" alt="Instagram" style="opacity: 0.4" />
			</NavLink>
		</div>
	</div>
</nav>
