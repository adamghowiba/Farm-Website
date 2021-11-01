<script>
	import Footer from '$lib/global/Footer.svelte';
	import MobileNavbar from '$lib/navbar/MobileNavbar.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import { onMount } from 'svelte';

	let open = false;

	const handleScrollOut = () => {
		open = false;
		document.removeEventListener('scroll', handleScrollOut);
	};

	const openMobileNavbar = () => {
		open = !open;
		document.addEventListener('scroll', handleScrollOut);
	};
</script>

<MobileNavbar bind:open />
<Navbar {open} on:openNavbar={openMobileNavbar} />
<slot />
<Footer />

<style>
	@media only screen and (max-width: 1000px) {
	}
</style>
