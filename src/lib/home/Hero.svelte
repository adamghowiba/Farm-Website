<script>
	import Button from '$lib/global/Button.svelte';
	import { t } from '$lib/translate';
</script>

<div class="hero">
	<!-- Wave & Wrapper -->
	<div class="wave-wrap">
		<div class="blank-filler" />
		<img class="wave" src="/icons/newwave.svg" alt="Waves On Main page" />
	</div>

	<!-- Hero Background Image -->
	<img
		class="hero-img"
		src="/images/hero_cow.jpg"
		alt="Cow looking at camera in front of the sun"
	/>

	<!-- Hero Headings -->
	<div class="container">
		<div class="heading">
			<h4 class="subtitle--light">{$t('hero.subtitle')}</h4>
			<h1>{$t('hero.title')}</h1>
			<p>
				{$t('hero.body')}
			</p>
			<Button href="/contact">{$t('button.get_in_touch')}</Button>
		</div>
	</div>
</div>

<style>
	.heading {
		position: absolute;
		top: 40%;
		transform: translateY(-50%);
		z-index: 10;
		max-width: 50ch;
	}
	.container {
		height: 100%;
	}
	h1 {
		text-transform: capitalize;
	}
	p {
		margin-bottom: 20px;
	}

	/* Code For Background & Wave */
	.hero {
		position: relative;
		z-index: 0;
		width: 100%;
		height: 100%;
	}
	.wave-wrap {
		position: absolute;
		display: flex;
		left: 0;
		top: 0;
		bottom: 0;
		min-width: 65%;
		height: 100%;
		z-index: 1;
	}
	.wave {
		height: 100%;
		transform: translate(-2px, 2px);
	}
	.blank-filler {
		background-color: var(--color-gray);
		height: 100%;
		width: 100%;
		min-width: 200px;
	}
	.hero-img {
		position: absolute;
		object-fit: cover;
		object-position: right;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	/* Smaller Than Laptops */
	@media screen and (max-width: 1000px) {
		.wave-wrap {
			display: none;
		}
		.hero::before {
			content: '';
			display: block;
			position: absolute;
			z-index: 1;
			top: 0;
			bottom: 0;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.418);
		}
		.heading {
			padding-top: 50px;
			top: 50%;
			color: white;
		}
		p {
			color: rgba(255, 255, 255, 0.808);
			max-width: 40ch;
		}
	}

	@media only screen and (max-width: 550px) {
		.hero {
			height: 90%;
		}
		.heading {
			max-width: 40ch;
		}
	}
</style>
