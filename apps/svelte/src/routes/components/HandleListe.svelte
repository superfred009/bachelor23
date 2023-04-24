<script lang="ts">
    import type { Product } from "../types/Product";
    export let selectedProducts: Product[] = [];
  
    let name = "";
  
    const handleNameChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      name = target.value;
    };
  
    const handleBuyCart = () => {
      const productList = selectedProducts.map((product) => {
        return `${product.title} x ${product.quantity}`;
      });
      alert(`Kjøp handleliste for ${name} med produktene:\n${productList.join("\n")}`);
    };
  
    const emptyCart = selectedProducts.length === 0;
  </script>
    
  
  <div>
    <h2>Handleliste</h2>
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
  </div>
  