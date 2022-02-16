<script lang="ts">
	export let rotate = 0;
	export let width: string = null;
	export let height: string = null;
</script>

<button class="button" style="--rotate: {rotate}deg; --width: {width}; --height: {height};" on:click>
	<img src="/icons/arrow--small.svg" alt="" />
</button>

<style>
	.button {
		width: var(--width, 70px);
		height: var(--height, 30px);
		transform: rotate(var(--rotate));
		background-color: var(--color-red);
		display: flex;
		color: white;
		padding: 20px 25px;
		justify-content: center;
		align-items: center;
        appearance: none;
        border: none;
        outline: none;

		transition: background-color 0.15s linear;
	}
	button:hover {
		background-color: rgb(243, 38, 65);
	}
</style>
