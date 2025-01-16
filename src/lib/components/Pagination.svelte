<script>
    import { createEventDispatcher } from 'svelte';

    export let currentPage;
    export let totalPages;

    const dispatch = createEventDispatcher();

    function handlePageChange(page) {
        if (page >= 1 && page <= totalPages) {
            dispatch('pageChange', page);
        }
    }
</script>

<nav class="pagination is-centered" aria-label="pagination">
    <div class="buttons">
        <button 
            class="paginationprevious button is-success is-small" 
            on:click={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1} 
            aria-label="Previous Page"
        >
            Previous
        </button>
        <button 
            class="paginationnext button is-success is-small" 
            on:click={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            aria-label="Next Page"
        >
            Next
        </button>
    </div>
</nav>

<style>
    .paginationprevious, .paginationnext {
        cursor: pointer;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }
    .paginationprevious[disabled], .paginationnext[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }
    @media (max-width: 768px) {
        .buttons {
            gap: 1rem;
        }
    }
</style>