<script>
	import Button from '$lib/global/Button.svelte';
</script>

<form>
	<input type="text" name="name" placeholder="Name" />

	<input type="text" name="email" placeholder="Email" />

	<input type="text" name="phone" placeholder="Phone" />

	<div class="select-wrap">
		<select name="service" placeholder="service">
			<option id="test" value="Export" selected hidden disabled>Select Option</option>
			<option value="Import">Import</option>
			<option value="Test">Test</option>
			<option value="More">Another Test</option>
		</select>
	</div>

	<textarea name="message" placeholder="message" />

	<Button type="submit">Submit</Button>
</form>

<style>
	/* Form CODE TAKE OUT */
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
		row-gap: 4rem;
		width: 100%;
		background-color: white;
		padding: 30px 30px;
	}
	input,
	textarea,
	select {
		appearance: none;
		height: fit-content;
		padding: 1rem 0px;
		border: none;
		outline: none;
		border-bottom: 1px solid var(--color-red);
		font-size: var(--text-body);
	}
	input::placeholder,
	textarea::placeholder,
	select {
		font-size: var(--text-body);
		font-family: 'Montserrat', sans-serif;
		text-transform: capitalize;
		position: relative;
	}
	select {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
	}
	.select-wrap {
		position: relative;
	}
	.select-wrap::after {
		content: url('/icons/select-arrow.svg');
		display: block;
		position: absolute;
		right: 20px;
		top: 43%;
		transform: translateY(-50%);
		width: 10px;
		height: 10px;
	}
	textarea {
		grid-column: 1/ -1;
		height: 150px;
		width: 100%;
	}


    @media screen and (max-width: 750px) {
		form {
			grid-template-columns: 1fr;
		}
    }
</style>
