<script>
import Stat from "./Stat.svelte";

</script>

<div class="container spaced">
    <div class="heading">
        <h2>Egypt's leading livestock professionals for over 20 years</h2>
        <p>
            A team of dedicated professionals who are passionate about the meat we supply to the wholesale
            industry
        </p>
    </div>

    <div class="stats">
        <Stat number={20} title="Years of expierence" />
        <Stat number={5} title="Egyption Farms" />
        <Stat number={12} title="Cattle breeds" />
        <Stat number={100} percentage title="Client a satisfcation" />
    </div>
</div>

<style>
    h2 {
        font-weight: var(--fw-md);
        margin-bottom: var(--pd-xs);
    }
    .stats {
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }
    .heading {
        max-width: 50ch;
        text-align: center;
        margin: 0 auto;
        margin-bottom: var(--pd-md);
    }
</style>
