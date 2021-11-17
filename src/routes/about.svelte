<script lang="ts">
	import AboutHeader from '$lib/about/AboutHeader.svelte';
	import AboutHistory from '$lib/about/AboutHistory.svelte';
	import Button from '$lib/global/Button.svelte';
	import Cta from '$lib/global/CTA.svelte';
	import FooterCta from '$lib/global/FooterCTA.svelte';
	import PageHeader from '$lib/global/PageHeader.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';

	type Selectors = 'history' | 'mission' | 'team';
	let selected: Selectors = 'history';

	const handleSelected = (selector: Selectors) => {
		selected = selector;
	};
</script>

<Navbar />
<PageHeader --src="url(/images/white-cow.jpg)" />

<section class="container spaced">
	<AboutHeader subtitle="Our" title={selected} />

	<div class="grid spaced">
		<div class="content">
			<AboutHistory {selected} />
		</div>

		<div class="selector">
			<h2>About Us</h2>
			<Button active={selected == 'history'} on:click={() => handleSelected('history')}
				>Our history</Button
			>
			<Button active={selected == 'mission'} on:click={() => handleSelected('mission')}
				>Our mission</Button
			>
			<Button active={selected == 'team'} on:click={() => handleSelected('team')}
				>Meet the team</Button
			>
		</div>
	</div>
</section>

<!-- <div class="container grid spaced--lg">
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
</div> -->

<Cta
	title="See our process"
	src="/images/cow_side.jpg"
	body="Fayrooz offers a wide range of different beef cattle breeds. Naturally raised in Egypt. Enjoyed
by people all around the world."
/>

<section>
	<FooterCta />
</section>

<style>
	.grid {
		/* display: grid;
		grid-template-columns: 1.3fr 1fr; */
		display: flex;
		width: 100%;
		gap: var(--pd-xl);
	}
	.selector {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.content {
		width: 100%;
	}
	h2 {
		display: inline-block;
	}

	@media only screen and (max-width: 1000px) {
		.grid {
			flex-direction: column-reverse;
			align-items: center
		}
		.selector {
			text-align: center;
		}
	}
</style>
