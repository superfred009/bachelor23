<script>
    import { createEventDispatcher } from "svelte";
    import HandleListe from "./HandleListe.svelte";

    export let numberOfProducts = 0;
    export let toggleCart = false;
    export let selectedProducts = [];
  
    const dispatch = createEventDispatcher();
  
    function toggleCartClick() {
      toggleCart = !toggleCart;
      dispatch("toggle");
    }
  </script>
  
  <header class="header_container">
    <div class="header">
      <h1>Products</h1>
      <button on:click={toggleCartClick}>
        Handlekurv {numberOfProducts > 0 ? `(${numberOfProducts})` : ''}
      </button>
    </div>
    {#if toggleCart}
      <div class="header_cart">
        <HandleListe {selectedProducts} />
      </div>
    {/if}
  </header>
  
  