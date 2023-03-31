import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const titleNames = derived(apiData, ($apiData) => {
  // @ts-ignore
  if ($apiData.products){
    // @ts-ignore
    return $apiData.products.map(products => products.title);
  }
  return "feil i titleNames";
});

export const description = derived(apiData, ($apiData) => {
  // @ts-ignore
  if ($apiData.products){
    // @ts-ignore
    return $apiData.products.map(products => products.description);
  }
  return "feil i description";
});

export const images = derived(apiData, ($apiData) => {
  // @ts-ignore
  if ($apiData.products){
    // @ts-ignore
    return $apiData.products.map(products => products.images);
  }
  return "feil i images";
});