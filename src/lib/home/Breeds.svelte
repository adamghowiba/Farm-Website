<script>
	import Button from '$lib/global/Button.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
</script>

<div class="container spaced wrap">
	<div class="headings">
		<h2>we carry the finest breed of fattening cattle</h2>
		<p>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore et.</p>
		<Button icon href="/livestock">View All</Button>
	</div>

    <!-- <div class="cards"> -->
        {#each Array(6) as _}
            <ImageCard
                name="Simmental"
                desc="The Simmental or Swiss Fleckvieh is a Swiss breed of dual-purpose cattle. It is named after the... Simmental – the valley of the Simme river"
            />
        {/each}
    <!-- </div> -->
</div>

<style>
	.wrap {
		display: grid;
		/* grid-template-columns: 1fr 1fr 1fr; */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr) );
		grid-template-rows: repeat(3, 1fr);
		justify-items: right;
		column-gap: 1.5rem;
		row-gap: 3rem;
		position: relative;
	}
	.headings {
		position: sticky;
		top: var(--pd-sm);
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
		height: min-content;
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
        .headings {
            grid-column: 1/-1;
            position: relative;
            max-width: 70ch;
            margin-bottom: var(--pd-lg);
        }
	}
</style>
