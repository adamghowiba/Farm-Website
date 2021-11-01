<script>
	import ContactInfo from '$lib/contact/ContactInfo.svelte';
</script>

<section class="background">
	<div class="footer container">
		<!-- Heading, Description, Contact Info -->
		<div class="info">
			<a href="/" class="logo">
				<img src="/images/logo.png" alt="Logo of bull" />
				<h2>Fayrooz Farms</h2>
			</a>
			<p>
				Our focus is on meeting our customers’ requirements and expectations with an extensive range
				and choice of quality cattle supply.
			</p>
	
			<!-- Social Links -->
			<div class="social-links">
				<ContactInfo icon="/icons/pin--white.svg" info="44 Elmessaha Street Dokki, Giza" />
				<ContactInfo icon="/icons/phone--white.svg" info="(202) 37 497 155" />
				<ContactInfo icon="/icons/email--white.svg" info="ahmad@fayroozfarm.com" />
			</div>
		</div>
	
		<!-- Links & Description -->
		<div class="links">
			<div class="links__items">
				<h4>Pages</h4>
				<hr />
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Farms</a>
				<a href="/">Livestock</a>
				<a href="/">Contact</a>
			</div>
	
			<div class="links__items">
				<h4>Breeds</h4>
				<hr />
				<a href="/">Abunduur Hefer</a>
				<a href="/">Limosione</a>
				<a href="/">Farms</a>
				<a href="/">Livestock</a>
				<a href="/">Contact</a>
			</div>
		</div>
	</div
	>
	<div class="legal container">
		<span>All Rights Reserved | Copyright © Al Fayrooz</span>
		<span>Designed by Web Revived | Custom Built With Svelete</span>
	</div>
</section>


<style>
	.footer {
		width: 100%;
		padding-top: 50px;
		padding-bottom: 50px;
		color: white;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--pd-lg);
	}
	.background {
		background-color: #272727;
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
	}
	.links {
		display: flex;
		gap: 2rem;
	}
	.links__items {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 18px;
	}
	.links__items a:not(:last-of-type) {
		margin-bottom: var(--pd-xs);
	}
	.social-links {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
		color: white;
	}

	.logo {
		display: flex;
		width: max-content;
		align-items: center;
		font-size: var(--text-h2);
		font-weight: var(--fw-bold);
		gap: 1rem;
	}
	img {
		top: -5px;
		position: relative;
		max-width: 50px;
	}
	h4 {
		font-size: 20px;
	}
	p {
		color: rgba(255, 255, 255, 0.685);
		max-width: 70ch;
	}
	hr {
		width: 100%;
		border-color: rgba(255, 255, 255, 0.39);
	}
	.legal {
		background-color: #272727;
		color: rgba(255, 255, 255, 0.678);
		font-size: 18px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 20px 30px;
	}
	.legal::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 30px;
		right: 30px;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.39);
	}

	@media only screen and (max-width: 1000px) {
		.footer {
			grid-template-columns: 1fr;
		}
		.legal {
			flex-direction: column;
		}
	}

	@media only screen and (max-width: 550px) {
		.links {
			flex-direction: column;
			gap: 4rem;
		}
	}
</style>
