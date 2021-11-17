<script lang="ts">
	type ButtonType = 'button' | 'submit';

	export let href = '/';
	export let icon = false;
	export let type: ButtonType = 'button';
	export let mgTop = 'unset';
	export let active = true;
</script>

{#if href === '/'}
	<button on:click {type} class:inactive={!active}> <slot /></button>
{:else}
	<a style="margin-top: {mgTop}" {href}>
		<slot />
		{#if icon}
			<img src="/icons/Arrow.svg" alt="Arrow Icon" />
		{/if}
	</a>
{/if}

<style>
	a,
	button {
		display: inline-flex;
		justify-content: center;
		width: max-content;
		align-items: center;
		background-color: var(--color-red);
		color: var(--color-white);
		border-radius: 5px;
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: var(--fw-bolder);
		z-index: 10;

		box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
		padding: 18px 40px;
		min-width: 228px;

		transition: opacity 0.25s linear;
	}
	button {
		appearance: none;
		border: none;
		outline: none;
	}
	img {
		margin-left: 20px;
	}
	.inactive {
		opacity: 0.5;
	}
</style>
