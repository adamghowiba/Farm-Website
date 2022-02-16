<script lang="ts">
import { fly } from "svelte/transition";

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

</script>

<div class="half-circle" on:click={scrollToTop} transition:fly={{duration: 500, y: 40}}>
	<svg width="37" height="33" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M36.6059 25.0803L18.303 0.134766L0 25.0803H11.5566V32.511H25.0466V25.0803H36.6059Z"
			fill="var(--color-gray)"
		/>
	</svg>
</div>

<style>
	.half-circle {
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		height: 55px;
		width:  55px;
		background-color: var(--color-red);
		z-index: 1000;
	}
	svg {
		width:  22px;
		height: 22px;
	}
	@keyframes pulse {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-6px);
		}
		100% {
			transform: translateY(0);
		}
	}
	.arrow {
		position: relative;
		z-index: 1000;
		top: 10px;
		width: 40%;

		transition: transform 0.25s ease-out;
	}
</style>
