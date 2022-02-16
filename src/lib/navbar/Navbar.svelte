<script>
	import { mobileNavOpen } from '$lib/stores';
	import { t } from '$lib/translate';
	import Hamburger from './Hamburger.svelte';
	import NavLink from './NavLink.svelte';

	export let relative = true;
</script>

<!-- <div class="container"> -->
<div class="filler" />
<div class="wrapper">
	<div class="navbar" class:relative>
		<a href="/">
			<img class="logo" src="/images/logo.png" alt="Logo of red bull" />
		</a>

		<div class="items">
			<NavLink href="/">{$t('nav.home')}</NavLink>
			<NavLink href="/about">{$t('nav.about')}</NavLink>
			<NavLink href="/farm">{$t('nav.farms')}</NavLink>
			<NavLink href="/livestock">{$t('nav.livestock')}</NavLink>
			<NavLink href="/contact">{$t('nav.contact')}</NavLink>
		</div>
		<div class:hide={$mobileNavOpen} class="contact-info">
			<a href="mailto:ali@fayroz.com" class="email">
				<img src="/icons/email--red.svg" alt="Red email icon" />
				{$t('contact.email')}
			</a>
			<a href="tel:4079246902" class="phone">
				<img src="/icons/phone--red.svg" alt="Red email icon" />
				{$t('contact.phone')}
			</a>
		</div>

		<div class="hamburger">
			<Hamburger {relative} />
		</div>
	</div>
</div>

<!-- </div> -->
<style>
	.navbar {
		display: flex;
		/* position: fixed; */
		max-width: 1140px;
		margin: 0 auto;
		align-items: center;
		right: 0;
		left: 0;
		z-index: 1000;
	}
	.filler {
		height: 90px;
	}
	.wrapper {
		width: 100%;
		background-color: var(--color-gray);
		position: fixed;
		top: 0;
		z-index: 1000;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	.relative {
		right: 0;
		/* position: fixed; */
	}
	.items {
		display: flex;
		flex-grow: 1;
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
		.logo {
			max-width: 80%;
			padding: 5px;
		}
		.filler {
			height: 83px;
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
		.hamburger {
			display: block;
			justify-content: flex-end;
		}
		.items {
			display: none;
		}
	}
</style>
