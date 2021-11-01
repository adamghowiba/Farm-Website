<script>
	export let icon;
	export let info = null;
</script>

<div class="wrapper">
	<div class="circle">
		<img src={icon} alt="Contact info icon" />
	</div>
	{#if info}
		<p>{info}</p>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		gap: var(--pd-xs);
	}
	.circle {
		display: grid;
		place-items: center;
		background-color: var(--color-red);
		border-radius: 50%;
		width: 42px;
		height: 42px;
	}
	p {
		color: inherit;
	}
</style>
