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
			{#each work_images as img, i}
				<div class="img">
					<enhanced:img src={img} alt="{work.name} {i}" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.img {
		margin-bottom: 1em;
	}
</style>
