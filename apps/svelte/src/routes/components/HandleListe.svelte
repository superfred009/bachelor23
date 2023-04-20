<script lang="ts" context="module">
    import type { Product } from "../types/Product";
    export let selectedProducts: Product[] = [];
  </script>
  
  <script>
    let name = "";
  
    const handleNameChange = (e) => {
      name = e.target.value;
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
    <h3>Velg produkter:</h3>
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
  