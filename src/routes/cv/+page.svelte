<script>
	import { csvParse } from 'd3-dsv';
	import LinkMaybe from '$lib/components/LinkMaybe.svelte';

	export let data;

	let exhibitions;
	$: {
		exhibitions = csvParse(data.exhibitionsCsv);
	}
</script>

<section class="section">
	<div class="container is-max-desktop">
		<div class="content">
			<h2>Exhibitions</h2>

			<dl>
				{#each exhibitions as e}
					<dt>
						{e.year} <b><LinkMaybe href={e.work_url}>{e.work}</LinkMaybe></b>
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

			<ul>
				<li>MA — Computational Arts — Goldsmiths, University of London</li>
				<li>BSc — Computater Science — King's College, University of London</li>
			</ul>
		</div>
	</div>
</section>

<style>
	dt {
	}
	dd {
		margin-bottom: 1.2em;
	}
</style>
