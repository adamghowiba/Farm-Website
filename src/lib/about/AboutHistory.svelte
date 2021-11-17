<script>
	export let selected;
</script>

{#if selected == 'history'}
	<div class="wrap">
		<p>
			<span>O</span>ur focus is on meeting our customers equirements and expectations by working
			closely with our suppliers in order to ensure the availability of an extensive range and
			choice of quality meats products
		</p>

		<p>
			<span>Commitment</span>
			ur focus is on meeting our customers equirements and expectations by working closely with our suppliers
			in order to ensure the availability of an extensive range and choice of quality meats products
		</p>

		<img src="/images/cows_on_farm.png" alt="Cows on a farm" />

		<p>
			<span>Quality assurance</span>
			ur focus is on meeting our customers equirements and expectations by working closely with our suppliers
			in order to ensure the availability of an extensive range and choice of quality meats products
		</p>
	</div>
{/if}

{#if selected == 'mission'}
	<div class="wrap">
		<p>
			OUR MISSION ur focus is on meeting our customers equirements and expectations by working
			closely with our suppliers in order to ensure the availability of an extensive range and
			choice of quality meats products
		</p>

		<img src="/images/white-cow.jpg" alt="Cows on a farm" />
		<p>
			<span>Commitment</span>
			ur focus is on meeting our customers equirements and expectations by working closely with our suppliers
			in order to ensure the availability of an extensive range and choice of quality meats products
		</p>
	</div>
{/if}

<style>
	img {
		object-fit: cover;
		max-height: 400px;
		max-width:100%;
	}
	.wrap {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
