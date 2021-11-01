<script>
	import Button from './Button.svelte';

	export let src;
	export let title;
	export let split = false;
    export let color = '#7F6248';
</script>

<div class="wrapper">
	{#if split}
		<div class="side" style="background-color: {color}">
			<h3>{title}</h3>
			<slot />
			<Button href="/farms">Learn More</Button>
		</div>
	{/if}
	<div class="cta">
		{#if !split}
			<h2>{title}</h2>
			<Button href="/farms">Learn More</Button>
		{/if}
		<img {src} alt="Background of cows" />
	</div>
</div>

<style>
	.cta {
		position: relative;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		color: white;
		width: 100%;
		gap: var(--pd-sm);
		padding: 3rem 40px;
	}
	.wrapper {
		height: 300px;
		display: flex;
	}
	.side {
		display: flex;
		flex-direction: column;
		gap: var(--pd-sm);
		/* align-items: center; */
		justify-content: center;
		position: relative;
		z-index: 200;
		height: 100%;
		background-color: black;
		color: white;
		padding: 0 4rem;
	}
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
		z-index: -1;
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
		max-width: 20ch;
		position: relative;
		text-transform: uppercase;
	}
</style>
