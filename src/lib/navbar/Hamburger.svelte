<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let open;

	const handleNavbarOpen = () => {
		open = !open && true;
		dispatch('openNavbar', true);
	};
</script>

<div class="hamburger" on:click={handleNavbarOpen} class:open>
	<svg class:active={open} viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
		<g transform="matrix(1,0,0,1,-389.5,-264.004)">
			<g id="arrow_left2">
				<g transform="matrix(1,0,0,1,0,5)">
					<path
						id="top"
						d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
					/>
				</g>
				<g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
					<path
						id="bottom"
						d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967"
					/>
				</g>
				<path id="middle" d="M390,284.967L420,284.967" />
			</g>
		</g>
	</svg>
</div>

<style>
	.hamburger {
		position: relative;
		display: flex;
		justify-content: center;
		width: 50px;
		height: 50px;
		margin-left: 2rem;
		z-index: 3000;
	}

	svg {
		fill-rule: evenodd;
		clip-rule: evenodd;
		stroke-linecap: round;
		stroke-linejoin: round;
		stroke-miterlimit: 1.5;
		cursor: pointer;
		width: 100%;
	}
	#top,
	#bottom {
		stroke-dasharray: 30, 75.39;
		transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
	}

	svg.active #top,
	svg.active #bottom {
		/* stroke-dasharray: 75.39; */
		stroke-dashoffset: -60;
	}

	svg:nth-child(2) {
		transform: rotate(0deg);
		transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	svg path {
		fill: none;
		stroke: white;
		stroke-width: 2px;
	}

	@media screen and (max-width: 1000px) {
	}
</style>
