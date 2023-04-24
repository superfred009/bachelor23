import { ProductsGrid } from '../components/ProductPage';

export default function Home({ products }) {
  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();

  return {
    props: {
      products: data.products,
    },
  };
}
