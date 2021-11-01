<script>
	import ContactInfo from '$lib/contact/ContactInfo.svelte';
	import Form from '$lib/contact/Form.svelte';
</script>

<div class="container spaced flex">
	<div class="heading">
		<div class="subtitle">Get in touch</div>
		<h2>lets discuss what we can do for you</h2>

		<div class="info">
			<ContactInfo icon="/icons/pin--white.svg" info="44 Elmessaha Street Dokki, Giza" />
			<ContactInfo icon="/icons/phone--white.svg" info="(202) 37 497 155" />
			<ContactInfo icon="/icons/email--white.svg" info="ahmad@fayroozfarm.com" />
		</div>
	</div>

	<Form />
</div>

<style>
	.flex {
		display: flex;
		gap: 3rem;
	}
	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--pd-xs);
	}
	.info {
		display: flex;
		flex-direction: column;
		gap: var(--pd-sm);
	}
	h2 {
		text-transform: uppercase;
		font-weight: var(--fw-md);
	}

	@media screen and (max-width: 1000px) {
		.flex {
			flex-direction: column;
		}
	}
</style>
