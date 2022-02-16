<script>
	import ContactSection from '$lib/home/ContactSection.svelte';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<Navbar />

<section class="spaced--lg">
	<ContactSection />
</section>

<style>
	section {
		/* margin-top: var(--pd-xl);
		margin-bottom: var(--pd-lg); */
	}
	div {
		visibility: hidden;
		height: 0px;
	}
</style>
