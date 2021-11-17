<script lang="ts">
	import Cta from '$lib/global/CTA.svelte';
	import FooterCta from '$lib/global/FooterCTA.svelte';
	import PageHeader from '$lib/global/PageHeader.svelte';
	import ImageGallery from '$lib/ImageGallery.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<Navbar />
<PageHeader --src="url(/images/cow_eating.png)" />
<section>
	<div class="container grid spaced">
		<div class="heading">
			<div class="subtitle">Our mission</div>
			<h2>A commitment to service and quality standards that is truly world class.</h2>
			<p>
				When it comes to livestock, we believe in the big picture. But we also believe in the
				integrity of every aniamal. As a global supplier of specialty beef cattle we’re more
				invested in the final product—and the process—than our competitors.
			</p>
		</div>
	</div>

	<img class="bull-sketch" src="/images/bull_sketch.png" alt="" />
</section>

<Cta
	title="Explore our breeds"
	src="/images/cow_side.jpg"
	body="Accumulated more than 20 years of experience sustinability growing healthy cattle"
/>

<section class="images spaced--lg">
	<img src="/images/bucket_sketch.png" alt="Sketch of bucket" />
	<h2>Gallery</h2>
	<ImageGallery />
</section>

<FooterCta />

<style>
	.grid {
		display: grid;
		grid-template-columns: 50% 50%;
		padding: 12rem 0;
	}
	section {
		position: relative;
		overflow-y: hidden;
		overflow-x: hidden;
	}
	.images {
		text-align: center;
	}
	.images img {
		max-width: 60px;
	}
	.images h2 {
		text-transform: uppercase;
		margin-bottom: var(--pd-md);
	}
	.bull-sketch {
		position: absolute;
		right: 0;
		transform: translateX(30%);
		top: 0;
		z-index: 0;
	}
</style>
