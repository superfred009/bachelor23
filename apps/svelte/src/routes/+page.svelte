<script lang="ts">
	import { onMount } from "svelte";
	import type { Product } from "./types/Product";
	import { load } from "./utils/products";
	import Header from "./components/Header.svelte";
	import HandleListe from "./components/HandleListe.svelte";
	import Lazy from "svelte-lazy";
  
	let products: Product[] = [];
	let selectedProducts = [];
	let numberOfProducts = 0;
	let toggleCart = false;
	let emptyCart = true;
  
	async function fetchData() {
	  products = await load();
	}
  
	//heavy javascript
	/*function heavyLoad() {
	  for (let i = 0; i < 7000000; i++) {
    	Math.atan(Math.sqrt(Math.pow(Math.random(), 2) + Math.pow(Math.random(), 2)));
  		}
	}
	onMount(heavyLoad)*/
	//
	

	onMount(fetchData);

	console.log(emptyCart)
  
	const addToCart = (product) => {
	  const productExist = selectedProducts.find((item) => item.id === product.id);
  
	  if (productExist) {
		selectedProducts = selectedProducts.map((item) =>
		  item.id === product.id
			? { ...productExist, quantity: productExist.quantity + 1 }
			: item
		);
	  } else {
		selectedProducts = [
		  ...selectedProducts,
		  {
			...product,
			quantity: 1,
		  },
		];
	  }
  
	  numberOfProducts = selectedProducts.reduce(
		(total, product) => total + product.quantity,
		0
	  );
	  emptyCart = selectedProducts.length === 0;
	};
  </script>
  
  <main>
	<Header
	  {numberOfProducts}
	  {toggleCart}
	  {selectedProducts}
	  on:toggle={() => (toggleCart = !toggleCart)}
	  {emptyCart}
	  />
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
			<button on:click={() => addToCart(product)}>
				Add to cart
			  </button>
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
	
  