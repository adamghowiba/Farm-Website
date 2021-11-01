<script>
	import Button from '$lib/global/Button.svelte';
	import ImageSlider from './ImageSlider.svelte';
</script>

<div class="container spaced">
	<div class="about">
		<ImageSlider />

		<div class="content">
			<div class="subtitle">What we offer</div>
			<h2>Egypt’s largest source of high quality livestock</h2>
			<p>
				You can't fake quality grown, sustainably raised beef production. We strive to create a
				stress-free environment for our animals and produce the healthiest, finest beef for you and
				your family.
			</p>
			<Button icon href="/about">Learn More</Button>
		</div>
	</div>
</div>

<style>
    .about {
        display: flex;
        gap: 30px;
    }
    .content {
        display:flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        flex-basis: 50%;
        max-width: 40ch;
        margin-left: auto;
    }

    @media screen and (max-width: 750px) {
        .about {
            align-items: center;
            flex-direction: column-reverse;
        }
        .content {
            max-width: 100%;
            margin-left: initial;
            margin-bottom: var(--pd-xl);
        }
    }
</style>
