<script>
	import Button from '$lib/global/Button.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
	import { breeds } from '$lib/breeds';
</script>

<div class="container spaced column">
	<div class="headings">
		<h2>we carry the finest breed of fattening cattle</h2>
		<p>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et.</p>
		<Button icon href="/livestock">View All</Button>
	</div>

	<div class="wrap">
		{#each breeds as breed}
			<ImageCard name={breed.name} desc={breed.desc} src={breed.thumbnail} />
		{/each}
	</div>
</div>

<style>
	.wrap {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: 1fr;
		justify-items: right;
		column-gap: 1.5rem;
		row-gap: 3rem;
		position: relative;
	}
	.column {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 2rem;
	}
	.headings {
		position: sticky;
		/* top: var(--pd-xl); */
		top: 110px;
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
		height: min-content;
		max-width: 35ch;
		grid-row: 1 / -1;
	}
	/* .cards {
        display: flex;
        flex-direction: column;
    } */
	h2 {
		text-transform: uppercase;
		font-weight: var(--fw-md);
	}

	@media screen and (max-width: 1000px) {
		.wrap {
			justify-items: left;
		}
		.column {
			grid-template-columns: 1fr;
		}
		.headings {
			grid-column: 1/-1;
			position: relative;
			max-width: 70ch;
			margin-bottom: var(--pd-lg);
			top: 0;
		}
	}
</style>
