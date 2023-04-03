export async function load() {
    const res = await fetch("https://dummyjson.com/products/");
    const data = await res.json();
    const products = data.products; // <-- access the nested "products" key here
    return {
      products,
    };
  }