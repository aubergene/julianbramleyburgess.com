<script>
	import MailingList from './MailingList.svelte';

	import { email } from '$lib/helpers.js';
</script>

<section class="section">
	<div class="container">
		<div class="content">
			<h1>Contact</h1>

			<p>
				Please get in touch by email <a href="mailto:{email}">{email}</a>
				<br />
				<br />
				<br />
			</p>
		</div>

		<MailingList />
	</div>
</section>
