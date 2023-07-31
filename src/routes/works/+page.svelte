<script>
	export let data;

	$: ({ works_index } = data);
</script>

<section class="section">
	<div class="container">
		<div class="grid">
			{#each works_index as { slug, name }}
				<div class="item">
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
	.grid {
		display: flex;
		gap: 16px;
	}
	.thumb {
		background-size: cover;
		height: 200px;
		min-width: 300px;
		max-width: 400px;
	}
</style>
