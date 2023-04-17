
<script lang="ts">
	import { onMount } from "svelte";
	import type { Product } from "./types/Product";
	import { load } from "./utils/products";

	import Lazy from "svelte-lazy"; // Import Lazy component
  
	let products: Product[] = [];
  
	async function fetchData() {
	  products = await load();
	}
  
	onMount(fetchData);
  </script>
  
  <main>
	<h1>Products</h1>
  
	<ul>
	  {#each products as product}
		<li>
		  <h2>{product.title}</h2>
		  <p>{product.description}</p>
		  <p>Price: ${product.price}</p>
		  <p>Discount: {product.discountPercentage}%</p>
		  <p>Rating: {product.rating}</p>
		  <p>Stock: {product.stock}</p>
		  <p>Brand: {product.brand}</p>
		  <p>Category: {product.category}</p>
		  <img src={product.thumbnail} alt={product.title} />
		  <div>
			{#each product.images as image}
			<Lazy>
			  <img src={image} alt={product.title} />
			</Lazy>
			{/each}
		  </div>
		</li>
	  {/each}
	</ul>
  </main>
  