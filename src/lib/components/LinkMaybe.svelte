<script>
	export let href;
	export let target;
</script>

{#if href}
	<a {href} {target}><slot /></a>
{:else}
	<slot />
{/if}
