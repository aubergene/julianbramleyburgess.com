<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

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
