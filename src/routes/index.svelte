<script>
	import translations from '../dict';
	import { dict, locale, t } from '$lib/translate';
	import { onMount } from 'svelte';
	import Hero from '$lib/home/Hero.svelte';
	import About from '$lib/home/About.svelte';
	import Breed from '$lib/home/BreedsSection.svelte';
	import CTA from '$lib/global/CTA.svelte';
	import Stats from '$lib/home/Stats.svelte';
	import ContactSection from '$lib/home/ContactSection.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	onMount(() => {
		document.body.dir = $locale == 'en' ? 'ltr' : 'rtl';
	});

	$locale = 'en';
	$: dict.set(translations);
</script>

<Navbar relative={true} />

<Hero />
<About />
<Breed />
<CTA src="/images/hero_cow.jpg" title="Get in touch to build your farm" />
<Stats />
<ContactSection />

<style>
</style>
