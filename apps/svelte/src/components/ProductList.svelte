<script lang="ts">
  import { onMount } from 'svelte';
  const { Product } = require('../types');

  let products: Product[] = [];

  onMount(async () => {
    const response = await fetch('https://dummyjson.com/products');
    products = await response.json();
  });
</script>

<h1>Product List</h1>

<ul>
  {#each products as product}
    <li>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>ID: {product.id}</p>
      <p>Description: {product.description}</p>
      <p>Color: {product.color}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>Availability: {product.available}</p>
      <p>Created At: {product.createdAt}</p>
      <p>Updated At: {product.updatedAt}</p>
    </li>
  {/each}
</ul>
