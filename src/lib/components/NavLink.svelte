<script lang="ts">
	import { run } from 'svelte/legacy';

	import { base } from '$app/paths';
	import { page } from '$app/stores';

	let {
		classes,
		href = $bindable(),
		target = $bindable(),
		children
	} = $props();

	let active = $state();
	let external = $state();
	run(() => {
		external = href.startsWith('http');
		target = external ? '_blank' : null;
		href = external ? href : base + href;
		active = $page.url.pathname === href;
	});
</script>

<a {href} aria-current={active} class="navbar-item {classes}" class:is-active={active} {target}
	>{@render children?.()}</a
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
