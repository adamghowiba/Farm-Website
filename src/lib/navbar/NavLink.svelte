<script lang="ts">
	import { page } from '$app/stores';
	import { mobileNavOpen } from '$lib/stores';

	export let href = '/';
	export let large = false;
	$: isActive = $page.path === href.toLowerCase();

	function checkNavbarOpen() {
		if ($mobileNavOpen) {
			$mobileNavOpen = false;
		}
	}
</script>

<a on:click={checkNavbarOpen} class:large {href} class:active={isActive}><slot /></a>

<style>
	a {
		width: fit-content;
		position: relative;
		text-transform: capitalize;
	}
	a::before {
		content: '';
		position: absolute;

		bottom: -5px;
		width: 0%;
		height: 2px;
		background-color: var(--color-red);
		transition: width 0.25s linear;
	}
	a.active::before,
	a:hover::before {
		content: '';

		width: 100%;
	}
	.large {
		font-size: 30px;
		color: white;
	}
</style>
