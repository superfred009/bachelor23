import { useEffect, useState } from 'react';
import styles from '@/styles/products.module.css';

export default function Hei() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, [products]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Dette er en react app</div>
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
                const cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
                console.log('Your Cart', cart);
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
