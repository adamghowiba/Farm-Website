<script>
	import Footer from '$lib/global/Footer.svelte';
	import MobileNavbar from '$lib/navbar/MobileNavbar.svelte';
	import { mobileNavOpen } from '$lib/stores';

	function overScrollMobileNav() {
		$mobileNavOpen = false;
		document.removeEventListener('scroll', overScrollMobileNav);
	}

	$: if ($mobileNavOpen) {
		document.addEventListener('scroll', overScrollMobileNav)
	} 

</script>

<MobileNavbar />
<slot />
<Footer />

<style>
</style>
