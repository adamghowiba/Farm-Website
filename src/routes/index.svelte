<script>
	import translations from '../dict';
	import { dict, locale, t } from '$lib/translate';
	import Button from '$lib/global/Button.svelte';
	import { onMount } from 'svelte';
	import Hero from '$lib/home/Hero.svelte';
	import About from '$lib/home/About.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
	import Breed from '$lib/home/BreedsSection.svelte';
	import CTA from '$lib/global/CTA.svelte';
	import Stats from '$lib/home/Stats.svelte';
	import ContactSection from '$lib/home/ContactSection.svelte';
	onMount(() => {
		document.body.dir = $locale == 'en' ? 'ltr' : 'rtl';
	});

	$locale = 'en';
	$: dict.set(translations);
</script>

<Hero />
<About />
<Breed />
<CTA src="/images/hero_cow.jpg" title="Get in touch to build your farm" />
<Stats />
<ContactSection />

<style>
</style>
