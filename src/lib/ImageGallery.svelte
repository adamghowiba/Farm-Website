<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import ControlButton from './global/ControlButton.svelte';

	let sliderWarpElement: HTMLElement;
	let imagesWrapElement: HTMLElement;

	let images = [
		'cow_eating.png',
		'hero_cow.jpg',
		'cows_in_field.png',
		'cows_on_farm.png',
		'cow_headshot.png',
		'cows_on_farm.png',
		'cow_headshot.png',
		'hero_cow.jpg',
		'cows_on_farm.png'
	];

	let currentImgIndex = 0;
	let transformAmount = 0;

	const slideImage = (direction: 'left' | 'right') => {
		if (direction === 'right' && currentImgIndex === images.length - 1) return;
		if (direction === 'left' && currentImgIndex === 0) return;

		const currentImageElement = imagesWrapElement.querySelectorAll('img')[currentImgIndex];
		const currentImageWidth = currentImageElement.clientWidth;

		// window.screen.width

		// console.log(imagesWrapElement.querySelectorAll('img')[5].offsetLeft);
		console.log(imagesWrapElement.scrollWidth - transformAmount);

		direction == 'left'
		? (transformAmount -= currentImageWidth)
		: (transformAmount += currentImageWidth);
		
		sliderWarpElement.style.transform = `translateX(-${transformAmount}px)`;
		
		direction == 'left' ? currentImgIndex-- : currentImgIndex++;
	};

	onMount(() => {});
</script>

<div class="wrap" bind:this={sliderWarpElement}>
	<div class="images-wrap" bind:this={imagesWrapElement}>
		{#each images as src}
			<img id="gallery-img" src="/images/{src}" alt="Cows eating on a field" />
		{/each}
	</div>
</div>
<div class="buttons">
	<ControlButton width="120px" height="50px" on:click={() => slideImage('left')} />
	<ControlButton width="120px" height="50px" rotate={180} on:click={() => slideImage('right')} />
</div>

<style>
	.wrap {
		position: relative;
		/* display: flex;
		gap: 5rem; */
		/* height: 400px; */

		transition: transform 0.35s ease-out;
	}
	.images-wrap {
		display: flex;
		/* gap: 3rem; */
		/* padding: 0 3rem; */

		transition-property: transform;
		align-items: flex-end;
	}
	.images-wrap img {
		padding-left: 2rem;
	}
	img {
		object-fit: cover;
		display: block;
		max-width: 385px;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: var(--pd-md);
		margin-top: var(--pd-sm);
	}
</style>
