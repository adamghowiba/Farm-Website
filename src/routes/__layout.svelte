<script lang="ts">
	import Footer from '$lib/global/Footer.svelte';
	import ScrollUp from '$lib/global/ScrollUp.svelte';
	import MobileNavbar from '$lib/navbar/MobileNavbar.svelte';
	import { mobileNavOpen } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';

	let scrolledDown: boolean = false;

	function overScrollMobileNav() {
		$mobileNavOpen = false;
		document.removeEventListener('scroll', overScrollMobileNav);
	}

	$: if ($mobileNavOpen) {
		document.addEventListener('scroll', overScrollMobileNav);
	}

	const scrollPast: IntersectionObserverCallback = ([entry]) => {
		if (entry.isIntersecting) return scrolledDown = false;
		scrolledDown = true;
		console.log('Scrolled out');
	};

	onMount(() => {
		const topFillerElement = document.querySelector('.top-filler');
		const observer = new IntersectionObserver(scrollPast, { threshold: 1.0 });
		observer.observe(topFillerElement);
	});

	onDestroy(() => {
		scrolledDown = false;
	});
</script>

<div class="top-filler" />
{#if scrolledDown}
	<div class="scroll-top">
		<ScrollUp />
	</div>
{/if}
<MobileNavbar />
<slot />
<Footer />

<style>
	.top-filler {
		position: absolute;
		z-index: 100;
		height: 100px;
		width: 100%;
	}
	.scroll-top {
		position: fixed;
		bottom: var(--pd-xs);
		right: var(--pd-xs);
		z-index: 1000;
	}
</style>
