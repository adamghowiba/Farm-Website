<script>
	import { page } from '$app/stores';
import { mobileNavOpen } from '$lib/stores';

	import { t } from '$lib/translate';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';

	export let relative = true;
</script>

<!-- <div class="container"> -->
	<div class="navbar" class:relative>
		<img src="/images/logo.png" alt="Logo of red bull" />

		<div class="items">
			<NavLink href="/">{$t('nav.home')}</NavLink>
			<NavLink href="/about">{$t('nav.about')}</NavLink>
			<NavLink href="/farm">{$t('nav.farms')}</NavLink>
			<NavLink href="/livestock">{$t('nav.livestock')}</NavLink>
			<NavLink href="/contact">{$t('nav.contact')}</NavLink>
		</div>
		<div class:hide={$mobileNavOpen} class="contact-info">
			<div class="email">
				<img src="/icons/email--red.svg" alt="Red email icon" />
				{$t('contact.email')}
			</div>
			<div class="phone">
				<img src="/icons/phone--red.svg" alt="Red email icon" />
				{$t('contact.phone')}
			</div>
		</div>

		<div class="hamburger">
			<Hamburger {relative} />
		</div>
	</div>
<!-- </div> -->

<style>
	.navbar {
		display: flex;
		position: absolute;
		max-width: 1140px;
		margin: 0 auto;
		align-items: center;
		right: 0;
		left: 0;
		z-index: 1000;
		/* top: 50%;
		transform: translateY(-50%); */
	}
	.relative {
		position: relative;
	}
	/* .background {
		background-color: var(--color-gray);
		height: 100px;
	} */
	.container {
		/* height: 100px; */
	}
	.items {
		display: flex;
		flex-grow: 1;
		/* gap: 2rem; */
		justify-content: space-between;
		width: 100%;
		margin-left: 40px;
		text-transform: capitalize;
	}

	.contact-info {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		align-items: center;
		gap: 2rem;

		transition: opacity 0.25s linear;
	}
	.email,
	.phone {
		display: flex;
		align-items: center;
	}
	.email img,
	.phone img {
		margin-right: 10px;
	}
	.hamburger {
		position: relative;
		display: none;
		z-index: 3000;
	}
	.hide {
		opacity: 0;
	}

	/* Phone Large */
	@media screen and (max-width: 550px) {
		.contact-info {
			display: none;
		}
		.hamburger {
			margin-left: auto;
		}
	}

	/* Small Laptop */
	@media screen and (max-width: 1000px) {
		 .contact-info {
			color: white;
			gap: 1rem;
		}
		.relative .contact-info {
			color: var(--color-black);
			gap: 1rem;
		}
		.container {
			background-color: transparent;
		}
		.hamburger {
			display: block;
			justify-content: flex-end;
		}
		.items {
			display: none;
		}
	}
</style>
