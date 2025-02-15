<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		target?: '_blank';
		children: Snippet;
	}

	let { href, target, children }: Props = $props();

	let active = $derived(page.url.pathname === href);
</script>

{#if active}
	{@render children()}
{:else}
	<a {href} class={{ contrast: active }} {target}>{@render children()}</a>
{/if}
