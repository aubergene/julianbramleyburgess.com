<script lang="ts">
	let { data } = $props();

	let { work, work_images } = $derived(data);
</script>

<section class="container">
	<div class="grid">
		<div>
			<h2>{work.name}</h2>
			<p>
				{work.year}<br />
				{work.parts}
			</p>
		</div>
		<div>
			{#each work_images as img}
				<!-- <img src={img.src} width={img.width} height={img.height} alt={work.name} /> -->
				<enhanced:img src={img.default} alt="some alt text" />
			{/each}
		</div>
	</div>
</section>

<style>
	img {
		margin-bottom: 1em;
	}
</style>
