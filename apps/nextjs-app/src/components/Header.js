import styles from '@/styles/products.module.css';
import { useState } from 'react';
import { ShoppingCart } from './ShoppingCart';

export const Header = ({ numberOfProducts, selectedProducts }) => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <header className={styles.header_container}>
      <div className={styles.header}>
        <h1>Products</h1>
        <button onClick={() => setToggleCart(!toggleCart)}>
          Handlekurv {numberOfProducts > 0 && `(${numberOfProducts})`}
        </button>
      </div>

      {toggleCart && (
        <div className={styles.header_cart}>
          <ShoppingCart selectedProducts={selectedProducts} />
        </div>
      )}
    </header>
  );
};
