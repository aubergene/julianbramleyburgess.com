<script lang="ts">
	let { data } = $props();

	let { work, work_images } = $derived(data);
</script>

<section class="container">
	<div class="grid">
		<div>
			{#each work.images as image}
				{@const img = work_images.get(`/${work.slug}/${image}`)}
				<img src={img.src} width={img.width} height={img.height} alt={work.name} />
			{/each}
		</div>
		<div>
			<h2>{work.name}</h2>
			<p>
				{work.year}<br />
				{work.parts}
			</p>
		</div>
	</div>
</section>

<style>
	img {
		margin-bottom: 1em;
	}
</style>
