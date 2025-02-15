<script lang="ts">
	import { stopPropagation } from 'svelte/legacy';

	import NavLink from './NavLink.svelte';

	let burgerActive = $state(false);

	function toggle() {
		burgerActive = !burgerActive;
		console.log(burgerActive);
	}

	function closeBurger() {
		burgerActive = false;
	}
</script>

<svelte:window onclick={closeBurger} />

<nav class="container">
	<ul>
		<li><NavLink href="/"><strong>Julian Bramley Burgess</strong></NavLink></li>
	</ul>
	<ul>
		<li><NavLink href="/">About</NavLink></li>
		<li><NavLink href="/works">Works</NavLink></li>
		<li><NavLink href="/cv">CV</NavLink></li>
		<li><NavLink href="/contact">Contact</NavLink></li>
		<li>
			<NavLink href="https://www.instagram.com/julianbramleyburgess/" target="_blank"
				><img src="/instagram.svg" alt="Instagram" style="opacity: 0.4" />
			</NavLink>
		</li>
	</ul>
</nav>
