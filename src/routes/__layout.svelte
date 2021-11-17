<script>
	import { page } from '$app/stores';

	import Footer from '$lib/global/Footer.svelte';
	import MobileNavbar from '$lib/navbar/MobileNavbar.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
	import { mobileNavOpen } from '$lib/stores';
	import { onMount } from 'svelte';

	// $: homePage = $page.path !== '/';

	// const handleScrollOut = () => {
	// 	open = false;
	// 	document.removeEventListener('scroll', handleScrollOut);
	// };

	// const openMobileNavbar = () => {
	// 	open = !open;
	// 	document.addEventListener('scroll', handleScrollOut);
	// };
</script>

<MobileNavbar />
<!-- <Navbar  {open} on:openNavbar={openMobileNavbar} /> -->
<slot />
<Footer />

<style>
	@media only screen and (max-width: 1000px) {
	}
</style>
