<script>
    import { createEventDispatcher } from "svelte";
    import HandleListe from "./HandleListe.svelte";

    export let numberOfProducts = 0;
    export let toggleCart = false;
    export let selectedProducts = [];
    export let emptyCart = true;
  
    const dispatch = createEventDispatcher();
  
    function toggleCartClick() {
      toggleCart = !toggleCart;
      dispatch("toggle");
    }

    function handleTitleClick() {
      window.scroll(0,0);
    }
  </script>
  
  <header class="header-container">
    <div class="header">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <h1 on:click={handleTitleClick}>Products</h1>
      <button on:click={toggleCartClick}>
        Handlekurv {numberOfProducts > 0 ? `(${numberOfProducts})` : ''}
      </button>
    </div>
    {#if toggleCart}
      <div class="header_cart">
        <HandleListe {selectedProducts} {emptyCart} />
      </div>
    {/if}
  </header>
  
  