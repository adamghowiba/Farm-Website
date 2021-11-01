<script lang="ts">
	import ContactInfo from '$lib/contact/ContactInfo.svelte';
	import { t } from '$lib/translate';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import NavLink from './NavLink.svelte';

	export let open;

	function clickNavbar() {
		open = false;
	}
</script>

<div class="nav" class:open class:delay={!open}>
	{#if open}
		<div class="left-side" in:fade={{ delay: 500 }} out:fade={{ duration: 400 }}>
			<NavLink on:click={clickNavbar} large href="/">{$t('nav.home')}</NavLink>
			<NavLink on:click={clickNavbar} large href="/about">{$t('nav.about')}</NavLink>
			<NavLink on:click={clickNavbar} large href="/farms">{$t('nav.farms')}</NavLink>
			<NavLink on:click={clickNavbar} large href="/livestock">{$t('nav.livestock')}</NavLink>
			<NavLink on:click={clickNavbar} large href="/contact">{$t('nav.contact')}</NavLink>

			<div class="social">
				<ContactInfo icon="/icons/pin--white.svg" />
				<ContactInfo icon="/icons/phone--white.svg" />
				<ContactInfo icon="/icons/email--white.svg" />
			</div>
		</div>
		<div class="right-side" in:fade={{ delay: 300 }} out:fly={{ x: 100, duration: 400 }}>
			<div class="contact-cta">
				<h3>Have any question?</h3>
				<a class="underline" href="mailto:adam@webrevived.com">support@yahoo.com</a>
			</div>

			<div class="contact-cta">
				<h3>Want to buy from us?</h3>
				<a class="button" href="/contact"
					>Contact Us
					<img src="/icons/arrow--small.svg" alt="right icon" />
				</a>
			</div>

			<div class="contact-cta">
				<h3>Give us a call</h3>
				<a href="tel:4079246902">407 924 6902</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.nav {
		position: absolute;
		display: hidden;
		width: 100%;
		height: 0px;
		top: 0;
		bottom: 0;
		background-color: #2a2a2a;
		z-index: 1000;
		overflow-x: hidden;
		overflow-y: auto;
		transition: height 0.45s ease-in-out;
	}
	.delay {
		transition-delay: 0.5s;
	}
	.open {
		height: 100%;
	}
	/* .left-side,
	.right-side {
		padding: 40px;
	} */

	.right-side,
	.left-side {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		gap: 2rem;
		padding: 40px;
	}
	.right-side {
		background-color: #1b1b1b;
	}
	.left-side {
		gap: 3rem;
	}
	.social {
		display: flex;
		position: absolute;
		gap: 1rem;
		color: white;
		bottom: 20px;
	}
	.contact-cta {
		color: white;
	}
	.contact-cta h3 {
		margin-bottom: 0.5rem;
	}
	.contact-cta a {
		font-size: 18px;
		color: rgba(255, 255, 255, 0.842);
	}
	h2 {
		display: block;
		width: 100%;
		text-align: left;
		color: white;
	}
	h3 {
		color: var(--color-red);
	}
	.underline {
		text-decoration: underline;
	}
	.button {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}
	img {
		transform: rotate(180deg);
		max-width: 10px;
	}

	@media only screen and (max-width: 1000px) {
		.nav {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
	}

	@media only screen and (max-width: 750px) {
		.nav {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
		.left-side {
			min-height: 600px;
		}
	}
</style>
