<script lang="ts">
	import { parseBreedName } from './utils/stringUtils';

	export let name: string;
	export let desc;
	export let src;

	let urlSafeName = parseBreedName(name);
</script>

<a href="/livestock/{urlSafeName}" class="card">
	<div class="head">
		<img {src} alt="Cattle breed aberdeen angus" />
	</div>

	<div class="body">
		<h4>{name}</h4>
		<p>
			{desc}
		</p>

		<a href="/livestock/{urlSafeName}">Learn More</a>
	</div>
</a>

<style>
	.card {
		display: block;
		background-color: white;
		width: fit-content;
		overflow: hidden;
	}
	.body {
		padding: 20px 28px;
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
	}
	h4 {
		color: var(--color-black);
		font-size: var(--text-xs);
		text-transform: uppercase;
	}
	img {
		display: block;
		width: 100%;
		height: 200px;
		object-fit: cover;
		position: relative;
	}
	.head {
		position: relative;
	}
	.head::after {
		content: url('/images/white-grass.png');
		position: absolute;
		left: 0;
		right: 0;
		bottom: -10px;
		z-index: 100;
	}
	p {
		font-size: var(--text-xs);
	}
	a {
		color: var(--color-red);
		display: flex;
	}
	a::after {
		content: url('/icons/arrow.svg');
		display: block;
	}
</style>
