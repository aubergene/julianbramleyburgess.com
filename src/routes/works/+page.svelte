<script lang="ts">
	let { data } = $props();

	let { works_index, work_images } = $derived(data);
</script>

<section class="container">
	<div class="grid">
		{#each works_index as { slug, name }}
			{@const img = work_images.get(`/${slug}/${slug}-01.jpg`)}
			<div class="work">
				<a href="/works/{slug}">
					<div class="thumb" style="background-image: url({img.src})"></div>
					<div>{name}</div>
				</a>
			</div>
		{/each}
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
