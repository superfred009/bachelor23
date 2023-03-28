import { useEffect, useState } from 'react';
import styles from '@/styles/products.module.css';
import { HandleListe } from '@/components/HandleListe';

export default function Hei() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, [products]);

  const addToCart = (product) => {
    const ProductExist = selectedProducts.find(
      (item) => item.id === product.id
    );
    if (ProductExist) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setSelectedProducts([
        ...selectedProducts,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Dette er en react app</div>
      <HandleListe selectedProducts={selectedProducts} />
      <div className={styles.body}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <div>
                <img src={product.images[0]} alt={product.images[0]} />
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
