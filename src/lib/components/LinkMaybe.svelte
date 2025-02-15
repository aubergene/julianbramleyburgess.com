<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		target?: '_blank';
		children?: Snippet;
	}
	let { href, target, children }: Props = $props();
</script>

{#if href}
	<a {href} {target}>{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
