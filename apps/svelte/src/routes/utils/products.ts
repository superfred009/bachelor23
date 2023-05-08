import type { Product } from "../types/Product";

export async function load(): Promise<Product[]> {
  const response1 = await fetch("https://dummyjson.com/products/");
  const data1 = await response1.json();

  const response2 = await fetch("https://dummyjson.com/products/");
  const data2 = await response2.json();

  return [...data1.products, ...data2.products];
}
