<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';


import { onMount } from "svelte";
import { apiData, titleNames, description, images } from './store.js';
import type { Product } from './types';


let produkter: Product[] = [];

onMount(async () => {
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


	<li>{produkter}</li>

	<h3>Whiskey Drinks Menu</h3>
	<li>test</li>
	<ul>
		<li>test</li>
	{#each $titleNames as titles}
		<li>{titles}</li>
	{/each}
	{#each $description as beskrivelse}
		<li>{beskrivelse}</li>
	{/each}
	{#each $images as bilder}
		<li>{bilder}</li>
	{/each}


	<!--
	<h1>Random User name</h1>

	{#each $titleNames as titles}
		<li>{titles}</li>
	{/each}
	{#await userPromise}
		<h2>Loading....</h2>
	{:then produkt}
		<h2>{produkt.products[0].title}</h2>
	{:catch err}
		<h2>Error while loading the data</h2>
	{/await}
	-->
	
	<Counter />
	<ProductList/>
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
