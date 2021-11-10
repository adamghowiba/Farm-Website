<script lang="ts">
	import { fade } from 'svelte/transition';

	export let subtitle: string;
	export let title: string;
</script>

<div class="wrap">
	<div class="line" />
	<span>{subtitle}</span>
	<h2>{title}</h2>
	<div class="line" />
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 9px;
		max-width: 150px;
		margin: 0 auto;
	}
	h2 {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
	}
	span {
		color: #6d6d6d;
		font-size: 20px;
	}
	.line {
		width: 70%;
		height: 1px;
		background-color: #686868;
	}
</style>
