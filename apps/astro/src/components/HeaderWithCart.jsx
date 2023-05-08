import React, { useState } from 'react';
import HandleListe from './HandleListe';

const HeaderWithCart = ({ selectedProducts }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
      <h1>Products</h1>
      <button onClick={toggleCart}>Handleliste</button>
      {showCart && <HandleListe selectedProducts={selectedProducts} />}
    </header>
  );
};

export default HeaderWithCart;
