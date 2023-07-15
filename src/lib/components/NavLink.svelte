<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let href;
	export let target;

	let active;
	let external;
	$: {
		external = href.startsWith('http');
		target = external ? '_blank' : null;
		href = external ? href : base + href;
		active = $page.url.pathname === href;
	}
</script>

<a {href} aria-current={active} class="navbar-item" class:is-active={active} {target}><slot /></a>

<style>
	.is-active {
		background-color: #7a7a7a;
	}
</style>
