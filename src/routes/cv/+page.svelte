<script>
	import { groups } from 'd3-array';
	import LinkMaybe from '$lib/components/LinkMaybe.svelte';

	export let data;

	let exhibitionsByYear;
	$: {
		exhibitionsByYear = groups(data.exhibitions, (d) => d.year);
	}
</script>

<section class="section">
	<div class="container">
		<div class="content">
			<h2>Exhibitions</h2>

			<div class="grid-year">
				{#each exhibitionsByYear as [year, exhibitions]}
					<div>{year}</div>
					<div>
						{#each exhibitions as e}
							<div class="item">
								<i><LinkMaybe href={e.work_url}>{e.work}</LinkMaybe></i>
								—
								<LinkMaybe href={e.show_url}>{e.show_name}</LinkMaybe>
								<LinkMaybe href={e.location_url}>{e.location}</LinkMaybe>
								{e.city}
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
		</div>
	</div>
</section>

<style>
	.grid-year {
		display: grid;
		gap: 0 3em;
		grid-template-columns: 2em auto;
	}
	.item {
		margin-bottom: 0.5em;
	}
	.item:last-child {
		margin-bottom: 2em;
	}
</style>
