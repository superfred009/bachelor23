import { ProductsGrid } from '../components/ProductPage';
import { heavyLoad } from '@/components/heavyLoad';
import { useEffect, useState } from 'react';

export default function Home() {
  // useEffect(async () => {
  //   // heavyLoad();
  // }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res1 = await fetch('https://dummyjson.com/products');
      const data1 = await res1.json();

      const res2 = await fetch('https://dummyjson.com/products');
      const data2 = await res2.json();

      const combinedProducts = [...data1.products, ...data2.products];
      setProducts(combinedProducts);
    };
    getData();
  }, [products]);

  return (
    <>
      <ProductsGrid products={products} />
    </>
  );
}

// SSR - Server Side Rendering

// export async function getServerSideProps() {
//   const res1 = await fetch('https://dummyjson.com/products');
//   const data1 = await res1.json();

//   const res2 = await fetch('https://dummyjson.com/products');
//   const data2 = await res2.json();

//   const combinedProducts = [...data1.products, ...data2.products];

//   return {
//     props: {
//       products: combinedProducts,
//     },
//   };
// }
