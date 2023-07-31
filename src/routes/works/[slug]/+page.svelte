<script>
	export let data;

	$: ({ work } = data);
</script>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
				<img src="/img/works/{work.slug}-01.jpg" alt={work.name} />
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
