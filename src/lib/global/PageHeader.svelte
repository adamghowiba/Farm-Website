<script>
	import { page } from '$app/stores';

	export let title = $page.path.replace('/', '');
	export let crumbs = 'home' + $page.path.replace('/', ' > ');
</script>

<div class="wrapper">
    <h1>{title}</h1>
	<h5>{crumbs}</h5>
</div>

<style>
	.wrapper {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
        flex-direction: column;
		height: 500px;
		width: 100%;
		color: white;
		background-image: var(--src);
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
	}
    .wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-overlay);
    }
	h1 {
		position: relative;
		margin: 0;
		text-transform: uppercase;
		font-size: var(--text-h1-lg);
		font-weight: var(--fw-md);
	}
    h5 {
        position: relative;
        font-weight: var(--fw-normal);
        font-size: 22px;
        color: rgba(255, 255, 255, 0.876);
        text-transform: capitalize;
    }
	@media only screen and (max-width: 750px) {
        h1 {
            font-size: 40px;;
        }
		.wrapper {
			height: 350px;
		}
    } 
</style>
