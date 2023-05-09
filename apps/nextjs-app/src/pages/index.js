import { ProductsGrid } from '../components/ProductPage';

export default function Home({ products }) {
  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const res1 = await fetch('https://dummyjson.com/products');
  const data1 = await res1.json();

  const res2 = await fetch('https://dummyjson.com/products');
  const data2 = await res2.json();

  const combinedProducts = [...data1.products, ...data2.products];

  return {
    props: {
      products: combinedProducts,
    },
  };
}
