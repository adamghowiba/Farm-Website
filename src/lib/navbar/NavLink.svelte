<script lang="ts">
	import { page } from '$app/stores';

	export let href = '/';
	export let large = false;
	$: isActive = $page.path === href.toLowerCase();

</script>

<a on:click class:large {href} class:active={isActive}><slot /></a>

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
