<script>
	import { breeds } from '$lib/breeds';

	import FooterCta from '$lib/global/FooterCTA.svelte';
	import PageHeader from '$lib/global/PageHeader.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import Breed from './[breed].svelte';

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
</script>

<Navbar />
<PageHeader --src="url(/images/white-cow.jpg)" --blue="green" />
<div class="container spaced">
	<div class="page-desc">
		<h2>6+ different types of bulls</h2>

		<p>
			For over 2 decades Fayrouz Farms has provided quality raised cattle breeds for profitable
			fattening and slaughtering. Our superior genetic standards assure the same quality through all
			of the future offsprings. <br /> <br />We focus on animal welfare, food safety, and providing
			verifiable and detailed information about our breeds.
		</p>
	</div>
	<div class="cards spaced">
		{#each breeds as breed}
			<ImageCard name={breed.name} desc={breed.desc} src={breed.thumbnail} />
		{/each}
	</div>

	<div class="half-circle" on:click={scrollToTop}>
		<img class="arrow" src="/icons/arrow-up.svg" alt="Arrow up" />
	</div>
</div>
<section>
	<FooterCta />
</section>

<style>
	.page-desc {
		display: grid;
		grid-template-columns: auto auto;
		gap: 2rem;
		align-items: center;
	}
	section {
		position: relative;
	}
	.half-circle {
		display: flex;
		justify-content: center;
		border-radius: 50%;
		margin: 0 auto;
		height: 50px;
		width: 100px;
		border: 1px solid red;
		border-radius: 100px 100px 0 0;
		border-bottom: none;
		position: relative;
	}
	.half-circle:hover > .arrow {
		animation: pulse 0.95s ease-out;
		animation-iteration-count: infinite;
	}
	@keyframes pulse {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
		100% {
			transform: translateY(0);
		}
	}
	.arrow {
		position: relative;
		z-index: 10;
		top: 10px;
		width: 40%;

		transition: transform 0.25s ease-out;
	}
	/* .half-circle::after {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 50%;
		bottom: -2px;
		z-index: 0;
		background-color: var(--color-gray);
	} */
	h2 {
		color: var(--color-red);
	}
	.cards {
		display: grid;
		grid-template-columns: auto auto;
		gap: 4rem;
	}

	@media only screen and (max-width: 750px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	@media only screen and (max-width: 1000px) {
		.page-desc {
			grid-template-columns: 1fr;
		}
	}
</style>
