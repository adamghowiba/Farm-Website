<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	let images = [
		'cow_eating.png',
		'cows_in_field.png',
		'cows_on_farm.png',
		'hero_cow.jpg',
		'cow_headshot.png'
	];
	let currentIndex = 0;

	const moveImageRight = () => {
		const last = currentIndex == images.length - 1;

		currentIndex++;

		if (last) currentIndex = 0;
	};

	const moveImageLeft = () => {
		const last = currentIndex == 0;

		currentIndex--;

		if (last) currentIndex = images.length - 1;
	};
</script>

<div class="wrapper">
	<div class="images">
		{#key currentIndex}
			<img
				transition:fly={{ x: -20 }}
				class="main-img"
				src={`/images/${images[currentIndex]}`}
				alt="Cows eating grass"
			/>
			<img
				class="second-img"
				src={`/images/${images[currentIndex == 4 ? 0 : currentIndex + 1]}`}
				alt="2 Cows sitting in field"
			/>
		{/key}
	</div>
	<div class="buttons">
		<div class="button left" on:click={moveImageLeft}>
			<img src="/icons/arrow--small.svg" alt="" />
		</div>
		<div class="button right" on:click={moveImageRight}>
			<img class="arrow--right" src="/icons/arrow--small.svg" alt="" />
		</div>
	</div>
</div>

<style>
	.wrapper {
		height: 100%;
		width: 100%;
		max-width: 600px;
		flex-basis: 60%;
	}
	.images {
		width: 100%;
		height: 600px;
		position: relative;
		/* border: 1px solid red; */
	}
	.main-img,
	.second-img {
		display: block;
		position: absolute;
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: 8px;
	}
	.main-img {
		width: 75%;
		right: 0rem;
		z-index: 10;
	}
	.second-img {
		height: 80%;
		top: 50%;
		left: -1rem;
		transform: translateY(-50%);
	}
	.buttons {
		margin-top: 2rem;
		display: flex;
		gap: 2rem;
		justify-content: flex-end;
	}
	.button {
		width: 70px;
		height: 30px;
		background-color: var(--color-red);
		display: flex;
		color: white;
		padding: 20px 25px;
		justify-content: center;
		align-items: center;
	}
	.arrow--right {
		transform: rotate(180deg);
	}

	@media screen and (max-width: 750px) {
		.images {
			height: 400px;
		}
		.second-img {
			left: 0rem;
		}
	}
</style>
