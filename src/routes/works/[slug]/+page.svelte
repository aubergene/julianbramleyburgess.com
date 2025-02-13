<script lang="ts">
	let { data } = $props();

	let { work, work_images } = $derived(data);
</script>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
				{#each work.images as image}
					{@const img = work_images.get(`/${work.slug}/${image}`)}
					<img src={img.src} width={img.width} height={img.height} alt={work.name} />
				{/each}
			</div>
			<div class="column">
				<div class="content">
					<h2>{work.name}</h2>
					<p>
						{work.year}<br />
						{work.parts}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
