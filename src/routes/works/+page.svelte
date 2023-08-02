<script>
	export let data;

	$: ({ works_index } = data);
</script>

<section class="section">
	<div class="container">
		<div class="works">
			{#each works_index as { slug, name }}
				<div class="work">
					<a href="/works/{slug}">
						<div class="thumb" style="background-image: url(/img/works/{slug}-01.jpg)"></div>
						<div>{name}</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.works {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}
	.work {
		flex-grow: 1;
	}
	.thumb {
		background-size: cover;
		aspect-ratio: 4/3;
		min-width: 300px;
		width: 100%;
	}
</style>
