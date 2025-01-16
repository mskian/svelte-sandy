<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import BlogList from '../../lib/components/BlogList.svelte';
    import Pagination from '../../lib/components/Pagination.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import posts from '../../content/posts.json';

    let title = 'Blog Page';
    let description = 'Simply Posting a Random Thoughts and Updates.';
    let canonicalUrl;

    let currentPage = 1;
    let postsPerPage = 3;
    let totalPages = Math.ceil(posts.length / postsPerPage);

    let paginatedPosts = posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );
    function updatePage(page) {
        currentPage = page;
        paginatedPosts = posts.slice(
            (currentPage - 1) * postsPerPage,
            currentPage * postsPerPage
        );
        goto(`?page=${currentPage}`);
    }

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const pageFromUrl = parseInt(urlParams.get('page'), 10);

        if (pageFromUrl && pageFromUrl >= 1 && pageFromUrl <= totalPages) {
            currentPage = pageFromUrl;
        }
        updatePage(currentPage);
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
<div class="container">
    <div class="columns">
    <div class="column is-8 is-offset-2">
            <BlogList posts={paginatedPosts} />
            <Pagination {currentPage} {totalPages} on:pageChange={event => updatePage(event.detail)} />
    </div>
    </div>
</div>
</section>
