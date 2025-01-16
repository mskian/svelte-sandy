<script>
    import { onMount } from 'svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    export let title;
    export let date;
    export let description;
    let canonicalUrl;

    onMount(() => {
        canonicalUrl = window.location.href;
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonicalUrl;
        document.head.appendChild(link);
    });

</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
</svelte:head>
<Navbar />
<section class="section">
<div class="container content">
<div class="columns is-centered">
<div class="column is-two-thirds">
<h1 class="post-title is-size-4">{title}</h1>
<p class="date mb-6"><small>📅 {date}</small></p>
<slot />
<br />
<hr />
<a href="/" class="button is-warning is-small mt-2 mb-2">Back to Home</a>
</div>
</div>
</div>
</section>

<style>
.content {
       font-family: "Geist Mono", serif;
        margin: 1rem 0;
        color: black;
}
.post-title {
    color: rgb(49, 22, 49);
}
.date {
    color: rgb(20, 41, 2);
}
</style>
