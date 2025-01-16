<script>
    import { onMount } from 'svelte';
  
    let isMenuActive = false;
  
    function toggleStatus() {
      const selectElement = document.querySelector('select[name="completed"]');
      const currentStatus = selectElement.value;
      selectElement.value = currentStatus === 'completed' ? 'not-completed' : 'completed';
    }
  
    function toggleCompletion(event, id) {
      console.log(`Toggling completion for ID: ${id}`);
    }
  
    onMount(() => {
      const selectElement = document.querySelector('select[name="completed"]');
      if (selectElement) {
        selectElement.addEventListener('change', (event) => {
          if (event.target.classList.contains('toggle-switch')) {
            const id = event.target.id.split('-')[1];
            toggleCompletion(event, id);
          }
        });
      }
    });
  </script>
  
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong>🦊 Sandy</strong>
      </a>
      <button
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded={isMenuActive}
        on:click={() => (isMenuActive = !isMenuActive)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div id="navbarMenu" class="navbar-menu" class:is-active={isMenuActive}>
      <div class="navbar-end">
        <a class="navbar-item" href="/">HOME</a>
        <a class="navbar-item" href="/blog">Blog</a>
      </div>
    </div>
  </nav>