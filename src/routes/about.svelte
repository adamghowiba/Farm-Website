<script>
	import Cta from '$lib/global/CTA.svelte';
	import FooterCta from '$lib/global/FooterCTA.svelte';
	import PageHeader from '$lib/global/PageHeader.svelte';
</script>

<PageHeader --src="url(/images/white-cow.jpg)" --blue="green" />

<div class="container grid spaced">
	<img src="/images/cow_eating.png" alt="" />
	<div class="heading">
		<div class="subtitle">Our mission</div>
		<h2>A commitment to service and quality standards that is truly world class.</h2>
		<p>
			Our focus is on meeting our customers’ requirements and expectations by working closely with
			our suppliers in order to ensure the availability of an extensive range and choice of quality
			meats products
		</p>
	</div>
</div>

<Cta split title="See our process" src="/images/cow_side.jpg"
	>Fayrooz offers a wide range of different beef cattle breeds. Naturally raised in Egypt. Enjoyed
	by people all around the world.</Cta
>

<section>
	<FooterCta />
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		align-items: center;
		gap: var(--pd-lg);
	}
	.heading {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
