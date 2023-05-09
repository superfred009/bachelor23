<script lang="ts">
    import type { Product } from "../types/Product";
	import Checkout from "./Checkout.svelte";
    export let selectedProducts: Product[] = [];
    export let emptyCart = true;

    let toggleCheckout = false;
  
    let name = "";
  
    const handleNameChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      name = target.value;
    };
  
    const handleBuyCart = () => {
      toggleCheckout = !toggleCheckout;
    };

  </script>
    
  
  <div>
    <h2>Handleliste</h2>

    {#if toggleCheckout}
      <Checkout
        {selectedProducts}
        {toggleCheckout}
        on:toggle={() => (toggleCheckout = !toggleCheckout)}
      />
    {:else}
    <input
      type="text"
      placeholder="Skriv inn ditt navn"
      value={name}
      on:input={handleNameChange}
    />
    <h3>Handleliste for {name}:</h3>
    <ul>
        {#each selectedProducts as product}
          <li>
            {product.title}
            {product.quantity && product.quantity > 1 ? ` x ${product.quantity}` : ''}
          </li>
        {/each}
      </ul>    
    <button on:click={handleBuyCart} disabled={emptyCart}>
      Kjøp handleliste
    </button>
    {/if}
  </div>
  