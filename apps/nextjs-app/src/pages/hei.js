import { useEffect, useState } from 'react';
import styles from '@/styles/products.module.css';
import { HandleListe } from '@/components/HandleListe';
import { CartModal } from '@/components/CartModal';

export default function Hei() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [toggleCart, setToggleCart] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, []);

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

  const numberOfProducts = selectedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <h1>Dette er en react app</h1>
          <button onClick={() => setToggleCart(!toggleCart)}>
            Handlekurv {numberOfProducts > 0 && `(${numberOfProducts})`}
          </button>
        </div>

        {toggleCart && (
          <div className={styles.header_cart}>
            <HandleListe selectedProducts={selectedProducts} />
          </div>
        )}
      </div>
      <div className={styles.body}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <div>
                <img
                  src={product.images[0]}
                  alt={`Image of ${product.title}`}
                />
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
