<script>
	import Button from './Button.svelte';

	export let src;
	export let title;
	export let body = null;
	// export let split = false;
	// export let color = '#7F6248';
</script>

<!-- <div class="wrapper">
	{#if split}
		<div class="side" style="background-color: {color}">
			<h3>{title}</h3>
			<slot />
			<Button href="/farm">Learn More</Button>
		</div>
	{/if}
	{#if !split}
		<div class="cta">
			<h2>{title}</h2>
			<Button href="/farm">Learn More</Button>
		</div>
	{/if}
	<img {src} alt="Background of cows" />
</div> -->



<!-- TODO: Clean this code up -->
<div class="wrapper cta">
	<h2>{title}</h2>
	{#if body}
		<p>{body}</p>
	{/if}
	<Button href="/farm">Learn More</Button>
	<img {src} alt="Background of cows" />
</div>

<style>
	.cta {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
		width: 100%;
		gap: var(--pd-xs);
		padding: 3rem 40px;
	}
	.wrapper {
		/* height: 300px; */
		position: relative;
		display: flex;
	}
	/* .side {
		display: flex;
		flex-direction: column;
		gap: var(--pd-sm);
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 200;
		height: 100%;
		background-color: black;
		color: white;
		padding: 0 4rem;
	} */
	/* .container {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: var(--pd-sm);
	} */
	.cta::after {
		content: '';
		display: block;
		position: absolute;
		background-color: rgba(0, 0, 0, 0.474);
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
	}
	img {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		object-fit: cover;
	}
	h2 {
		line-height: 1.5;
		text-transform: uppercase;
	}
	
	h2,
	p {
		color: white;
		position: relative;
		z-index: 10;
		text-align: center;
		max-width: 50ch;
	}
</style>
