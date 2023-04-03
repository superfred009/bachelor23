<!--
<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import {load} from './+page'

import { onMount } from "svelte";
import { apiData, titleNames, description, images } from './store.js';
//import type { Product } from './types';

//let produkter: Product[] = [];

/*
let produkter = [];

onMount(async () => {
	produkter = await getProduct();
});
*/

const getProduct = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/photos");
	const data = await res.json();
	const filterdData = data.slice(0,3);
	console.log(filterdData);
	return filterdData;
};




/*onMount(async () => {
  fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
		console.log(data);
    	apiData.set(data);
		produkter = data;
  }).catch(error => {
    console.log(error);
    return [];
  });
});
*/




/*
const getRandomUser = async () => {
		var response = await fetch('https://dummyjson.com/products');
		var result = await response.json();
		return result;
	}
	
	let userPromise = getRandomUser();
*/
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>



	<h3>Whiskey Drinks Menu</h3>
	<li>test</li>

	{#await getProduct()}
		<p>loading...</p>		
	{:then data}
		{#each data as { title, description }}
			<div>
				<p>{title}</p>
				<p>{description}</p>
			</div>
		{/each}
	{/await}


	
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
-->
<script lang="ts">
	import type { Product } from "./types/Product";
	import { load } from "./utils/products";
  
	let products: Product[] = [];
  
	async function fetchData() {
	  products = await load();
	}
  
	$: {
	  fetchData();
	}
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
			  <img src={image} alt={product.title} />
			{/each}
		  </div>
		</li>
	  {/each}
	</ul>
  </main>
  