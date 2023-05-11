<script lang="ts">
	export const ssr = false;

	import { onMount } from "svelte";
	import type { Product } from "./types/Product";
	import { load } from "./utils/products";
	import Header from "./components/Header.svelte";
	import HandleListe from "./components/HandleListe.svelte";
	import Lazy from "svelte-lazy";
	
	import { heavyLoad } from './heavyLoad.js';
  
	let products: Product[] = [];
	let selectedProducts = [];
	let numberOfProducts = 0;
	let toggleCart = false;
	let emptyCart = true;
  
	async function fetchData() {
	  products = await load();
	}
  

	onMount(() =>heavyLoad());

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
  
	<Header
	  {numberOfProducts}
	  {toggleCart}
	  {selectedProducts}
	  on:toggle={() => (toggleCart = !toggleCart)}
	  {emptyCart}
	  />
	  <div class="body">
		{#each products as product}
		  	<div class="card">
				<div class="card-items">
					<h5>{product.title}</h5>
					<button on:click={() => addToCart(product)}>
						Add to cart
					</button>
				</div>
				<p>{product.description}</p>
				<ul>
					<li>Price: ${product.price}</li>
					<li>Discount: {product.discountPercentage}%</li>
					<li>Rating: {product.rating}</li>
					<li>Stock: {product.stock}</li>
					<li>Brand: {product.brand}</li>
					<li>Category: {product.category}</li>
				</ul>
				<Lazy >
				{#each product.images as image}
					<img src={image} alt={product.title} height={500} width={500} />
					{/each}
				</Lazy>
		  	</div>
		{/each}
	  </div>
	
  
