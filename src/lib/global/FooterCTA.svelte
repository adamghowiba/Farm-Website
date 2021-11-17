<script>
import Button from "./Button.svelte";


</script>

<div class="wrap">
    <img src="/images/farm-sketch.png" alt="">
    <h3>Contact Us For Detailed Information</h3>
    <Button href='/contact'> Get in touch</Button>
</div>

<style>
.wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 15rem 0;
    position: relative;
}
img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
}
h3 {
    text-align: center;
    max-width: 20ch;
}
</style>