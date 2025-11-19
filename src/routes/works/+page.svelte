<script lang="ts">
	let { data } = $props();

	let { works_index } = $derived(data);
</script>

<section class="container">
	<h1>Works</h1>
	<div class="works">
		{#each works_index as { slug, name, year, lead_img }}
			<div class="work">
				<div class="thumb">
					<a href="/works/{slug}" title={name}>
						<enhanced:img src={lead_img.default} alt={slug} />
					</a>
				</div>
				<div>
					<div class="name">
						<a href="/works/{slug}">{name}</a>
						<div class="year">{year}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.work {
		display: flex;
		gap: 16px;
		margin-top: 2em;
	}
	.thumb {
		width: 30%;
	}
	.year {
		color: var(--pico-muted-color);
	}
</style>
