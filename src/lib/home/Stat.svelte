<script lang="ts">
	export let number: number;
	export let title: string;
	export let percentage = false;
</script>

<div class="stat">
	<h2>{number}<span class="sign">{!percentage ? '+' : '%'}</span></h2>
	<span class="title">{title}</span>
</div>

<style>
	.stat {
        display: flex;
        flex-direction: column;
        align-items: center;
		text-align: center;
	}
	h2 {
		font-size: 78px;
		font-weight: var(--fw-light);
	}
	.sign {
		color: var(--color-red);
	}
	.title {
        display: inline-block;
        max-width: 9ch;
		color: #717171;
		font-size: 23px;
		text-align: center;
	}
</style>
