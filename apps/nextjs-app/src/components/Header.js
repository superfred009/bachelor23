import { useState } from 'react';
import { ShoppingCart } from './ShoppingCart';

export const Header = ({ numberOfProducts, selectedProducts }) => {
  const [toggleCart, setToggleCart] = useState(false);
  return (
    <header className="header-container">
      <div className="header">
        <h1>Products</h1>
        <button onClick={() => setToggleCart(!toggleCart)}>
          Handlekurv {numberOfProducts > 0 && `(${numberOfProducts})`}
        </button>
      </div>

      {toggleCart && (
        <div className="header-cart">
          <ShoppingCart selectedProducts={selectedProducts} />
        </div>
      )}
    </header>
  );
};
