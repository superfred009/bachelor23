// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(`https://dummyjson.com/products`);
    const item = await res.json();
   
    return { item };
  }
