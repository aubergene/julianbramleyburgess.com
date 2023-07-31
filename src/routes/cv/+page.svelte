<script>
	import { csvParse } from 'd3-dsv';
	import LinkMaybe from '$lib/components/LinkMaybe.svelte';
	import { page } from '$app/stores';

	export let data;

	let exhibitions;
	$: {
		exhibitions = csvParse(data.exhibitionsCsv);
	}
</script>

<section class="section">
	<div class="container">
		<div class="content">
			<h2>Exhibitions</h2>

			<dl>
				{#each exhibitions as e}
					<dt>
						<span class="year">{e.year}</span>
						<b><LinkMaybe href={e.work_url}>{e.work}</LinkMaybe></b>
						— <LinkMaybe href={e.show_url}>{e.show_name}</LinkMaybe>
					</dt>
					<dd>
						<LinkMaybe href={e.location_url}>{e.location}</LinkMaybe>
						—
						{e.city}
					</dd>
				{/each}
			</dl>

			<h2>Education</h2>

			<h3>2020</h3>
			<p>MA — Computational Arts — Goldsmiths, University of London</p>

			<h3>2000</h3>
			<p>BSc — Computater Science — King's College, University of London</p>
		</div>
	</div>
</section>

<style>
	dd {
		margin-left: 400px;
		margin-bottom: 1.2em;
	}
</style>
