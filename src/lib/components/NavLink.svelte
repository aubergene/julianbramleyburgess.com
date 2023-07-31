<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let classes;
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

<a {href} aria-current={active} class="navbar-item {classes}" class:is-active={active} {target}
	><slot /></a
>

<style>
	.navbar-item,
	.navbar-item.is-active {
		color: #666;
		background-color: #fff;
		text-transform: uppercase;
	}
	.navbar-item:hover {
		color: #000;
		background-color: #fff;
	}
</style>
