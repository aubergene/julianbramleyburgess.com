<script lang="ts">
	let { href, target, children } = $props();
</script>

{#if href}
	<a {href} {target}>{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
