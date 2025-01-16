<script>
    import { page } from '$app/stores';
    export let error;
    export let status;
    let title = (status && `${status} - Error`) || 'Error - Something went wrong';
    let description = (error?.message || 'An unexpected error occurred. Please try again later.');
    let url = $page.url.href;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={url} />
</svelte:head>

<section class="section">
<div class="container">
<main class="error-page">
    <h1>{status || 'Unknown Error'}</h1>
    <p>{description}</p>
    <a href="/" class="button is-danger">Go Back Home</a>
</main>
</div>
</section>

<style>
    .error-page {
        font-family: "Geist Mono", serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    h1 {
        color: #000;
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    p {
        color: #000;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
</style>
