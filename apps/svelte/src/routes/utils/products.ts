import type { Product } from "../types/Product";

export async function load(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products/");
  const data = await response.json();

  return data.products;
}
