<script>
	import MailingList from '$lib/components/MailingList.svelte';
</script>

<section class="section">
	<div class="container">
		<div class="content">
			<h1>Styleguide — Heading 1</h1>

			<p>
				This is a sample paragraph with <b>some bold</b> and then later a bit <i>of italics</i> and
				then a <a href="#">link to nowhere</a>
			</p>

			<ul>
				<li>A bulletted list</li>
				<li>Of items</li>
				<li>Three of them infact</li>
			</ul>

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam possimus amet
				blanditiis voluptas delectus cumque quos omnis facere accusantium, id, sapiente a nam! Odit
				eligendi quisquam maiores error architecto?
			</p>

			<ol>
				<li>First you must do this</li>
				<li>Followed by this</li>
				<li>Or just skip straight to the end</li>
			</ol>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora aspernatur vel, odit
				ratione dolore impedit veritatis, nulla temporibus dolorum, similique corrupti nostrum neque
				dicta quis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora aspernatur
				vel, odit ratione dolore impedit veritatis, nulla temporibus dolorum, similique corrupti
				nostrum neque dicta quis. Ab ipsam veritatis officia!
			</p>

			<h2>Heading 2</h2>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tempora aspernatur vel, odit
				ratione dolore impedit veritatis, nulla temporibus dolorum, similique corrupti nostrum neque
				dicta quis. Ab ipsam veritatis officia!
			</p>
		</div>

		<MailingList />
	</div>
</section>

<section class="section" style="background-color: #f90">
	<h1 class="title">This is a new section</h1>

	<div class="content">
		<p>This section doesn't have a container, but does have a background colour</p>
	</div>
</section>
