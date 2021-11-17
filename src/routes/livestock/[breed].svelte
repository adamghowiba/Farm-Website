<script context="module" lang="ts">
	import { breeds } from '$lib/breeds';
	import type { Breed } from '$lib/types';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export const load = ({ page }) => {
		const id = page.params.breed;
		const breedData: Breed = breeds.find((val) => (val.name = id));

		return {
			props: {
				id,
				breedData
			}
		};
	};
</script>

<script lang="ts">
	import Button from '$lib/global/Button.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';

	export let id;
	export let breedData: Breed;

	const benfits = breedData.benefits.join(', ');
</script>

<!-- <div class="container"> -->
<Navbar />
<div class="wrap container">
	<div class="images">
		<img class="images__third" src="/images/hero_cow.jpg" alt="Third" />
		<img src="/images/breeds/limousine-2.png" alt="First" />
		<img class="images__third" src="/images/cow_headshot.png" alt="Third" />
		<img class="images__second" src="/images/cow_side.jpg" alt="Second" />
	</div>

	<div class="data">
		<h2>{id}</h2>
		<h4>Great for {benfits}</h4>
		<p>
			Each kind of Fayrouz’ cattles provides fine beef and dairy products. Our superior genetic
			standards assure the same quality through all of the future
		</p>
		<div class="data-overflow">
			<div class="data-point">
				<span>Avg Weight.</span>
				<span>200kg</span>
			</div>

			<div class="data-point">
				<span>Avg Weight.</span>
				<span>200kg</span>
			</div>

			<div class="data-point">
				<span>Avg Weight.</span>
				<span>200kg</span>
			</div>
		</div>

		<Button mgTop="2.4em" href="/contact">Get in touch</Button>
	</div>
</div>

<!-- </div> -->
<style>
	.wrap {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		margin-top: 10em;
		margin-bottom: 10em;
		height: min-content;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.data {
		display: flex;
		flex-direction: column;
		gap: 1.2em;
	}
	.data-overflow {
		overflow-y: auto;
		max-height: 500px;
	}
	.data-point {
		display: flex;
		justify-content: space-between;
		padding: 2em 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
	.images {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: minmax(500px, 1fr);
		grid-auto-rows: 150px;
		gap: 1rem;
		height: min-content;
	}
	.images img:first-child {
		grid-column: 1/-1;
		/* border: 2px solid gold; */
	}
	h2 {
		font-weight: var(--fw-md);
		text-transform: capitalize;
	}
	h4 {
		font-size: var(--text-sm);
		color: var(--color-red);
		font-weight: var(--fw-md);
	}
	span {
		font-size: var(--text-xs);
		color: var(--color-light-gray);
		font-weight: var(--fw-normal);
	}
	/* .images__main {
		grid-column: 1/-1;
	} */

	@media only screen and (max-width: 750px) {
		.wrap {
			grid-template-columns: 1fr;
		}
		.data {
			grid-row: 1;
		}
		.images {
			grid-template-columns: 1fr;
		}
	}

	@media only screen and (max-width: 1000px) {
		.wrap {
			gap: 3rem;
		}
	}
</style>
