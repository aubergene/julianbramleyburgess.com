<script lang="ts">
	import { groups } from 'd3-array';
	import LinkMaybe from '$lib/components/LinkMaybe.svelte';

	let { data } = $props();

	let exhibitionsByYear = $derived(groups(data.exhibitions, (d) => d.year));
</script>

<section class="container">
	<h2>Exhibitions</h2>

	<div class="grid-year">
		{#each exhibitionsByYear as [year, exhibitions]}
			<div>{year}</div>
			<div>
				{#each exhibitions as e}
					<div class="item">
						<span class="work">
							<LinkMaybe href={e.work_url}>{e.work}</LinkMaybe>
						</span>
						{#if e.show_name}—{/if}
						<span class="show">
							<LinkMaybe href={e.show_url}>{e.show_name}</LinkMaybe>
						</span>
						<span class="location">
							<LinkMaybe href={e.location_url}>{e.location}</LinkMaybe>
							{e.city}
						</span>
					</div>
				{/each}
			</div>
		{/each}
	</div>

	<h2>Education</h2>

	<div class="grid-year">
		<div>2020</div>
		<div>MA — Computational Arts — Goldsmiths, University of London</div>
		<div>2000</div>
		<div>BSc — Computater Science — King's College, University of London</div>
	</div>
</section>

<style>
	.grid-year {
		display: grid;
		gap: 0 3em;
		grid-template-columns: 4em auto;
		margin-bottom: 2em;
	}
	.item {
		margin-bottom: 0.75em;
	}
	.item:last-child {
		margin-bottom: 2em;
	}
	.location {
		display: block;
		color: var(--pico-muted-color);
		font-size: smaller;
	}
</style>
