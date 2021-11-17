<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let controlElement: HTMLElement;
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
		'cows_on_farm.png',
	];

	function showSliderControl(value) {
		if (!value) {
			cancelAnimationFrame(frame);
			frame = 0;
		} else {
			frame = requestAnimationFrame(animateSliderControl);
		}

		controlShown = value;
	}

	let controlShown = false;
	let dragging = false;
	let frame;

	let speed = 0.07;
	let mouseX = 0,
		mouseY = 0;

	let controlX = 0,
		controlY = 0;

	let imageXs = [];
	let maxX;

	function getImageX() {
		const elements = document.querySelectorAll('#gallery-img');

		elements.forEach((elem: HTMLElement) => {
			imageXs.push(-elem.offsetLeft);
		});
	}

	let xTravleed = 0;
	let prevX;

	function handleMouseMove(event) {
		const { clientX, clientY } = event;
		const bounds = sliderWarpElement.getBoundingClientRect();

		mouseX = clientX - 50;
		mouseY = clientY - bounds.top - 50;

		/* Dragging Code */
		if (dragging) {
			prevX && (xTravleed += event.clientX - prevX);
			prevX = event.clientX;

			imagesWrapElement.style.transform = `translateX(${xTravleed}px)`;
		}

		event.preventDefault();
	}

	function animateSliderControl() {
		let distX = mouseX - controlX;
		let distY = mouseY - controlY;

		controlX = controlX + distX * speed;
		controlY = controlY + distY * speed;

		controlElement.style.transform = `translate(${controlX}px, ${controlY}px)`;

		if (frame != 0) {
			requestAnimationFrame(animateSliderControl);
		}
	}

	function handleMouseDown(event) {
		dragging = true;
		imagesWrapElement.style.transitionDuration = 'unset';
	}

	function handleMouseUp(event) {
		dragging = false;
		prevX = 0;

		const closestImageX = closest(imageXs, xTravleed);
		xTravleed = closestImageX;

		imagesWrapElement.style.transitionDuration = '0.25s';
		imagesWrapElement.style.transform = `translateX(${xTravleed}px)`;
	}

	const closest = (arr, num) => {
		maxX = imagesWrapElement.scrollWidth - imagesWrapElement.offsetWidth;
		return (
			arr.reduce((prev, curr) => {
				if (Math.abs(curr - num) < Math.abs(prev) && curr > -maxX) {
					return curr - num;
				} else {
					return prev;
				}
			}, Infinity) + num
		);
	};

	onMount(() => {
		getImageX();
	});
</script>
<div
	class="wrap"
	on:mousemove={handleMouseMove}
	on:mouseleave={() => showSliderControl(false)}
	on:mouseenter={() => showSliderControl(true)}
	on:mousedown={handleMouseDown}
	on:mouseup={handleMouseUp}
	bind:this={sliderWarpElement}
>
	<div class="images-wrap" bind:this={imagesWrapElement}>
		{#each images as src}
			<img id="gallery-img" src="/images/{src}" alt="Cows eating on a field" />
		{/each}
	</div>

	<div class="slider-control" class:controlShown bind:this={controlElement}>
		<span> &lt; </span>
		<span>Drag</span>
		<span>&gt;</span>
	</div>
</div>

<style>
	.wrap {
		position: relative;
		/* display: flex;
		gap: 5rem; */
		/* height: 400px; */
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
	.wrap:hover {
		cursor: none;
	}
	img {
		object-fit: cover;
		display: block;
		max-width: 385px;
	}

	/* Slider control */
	.slider-control {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		gap: 0.4rem;
		align-items: center;
		border-radius: 50%;
		background-color: var(--color-red);
		width: 100px;
		height: 100px;
		color: white;
		opacity: 0;
		pointer-events: none;

		transition: opacity 0.25s linear;
	}
	.controlShown {
		opacity: 1;
	}
</style>
