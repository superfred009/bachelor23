import React, { useState } from 'react';
import { CheckoutForm } from './Checkout';

export const HandleListe = ({ selectedProducts = [] }) => {
  const [name, setName] = useState('');
  const [toggleBuyCart, setToggleBuyCart] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBuyCart = () => {
    setToggleBuyCart(!toggleBuyCart);
  };

  const emptyCart = selectedProducts.length === 0;

  return (
    <div>
      <h2>Handleliste</h2>
      <input
        type="text"
        placeholder="Skriv inn ditt navn"
        value={name}
        onChange={handleNameChange}
      />
      <h3>Velg produkter:</h3>
      <h3>Handleliste for {name}:</h3>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            {product.title}
            {product.quantity > 1 && ` x ${product.quantity}`}
          </li>
        ))}
      </ul>
      <button onClick={handleBuyCart} disabled={emptyCart}>
        Kjøp handleliste
      </button>
      {toggleBuyCart && <CheckoutForm products={selectedProducts} />}
    </div>
  );
};
