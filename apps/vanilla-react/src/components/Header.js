import React from 'react';
import {HandleListe} from './HandleListe';

export const Header = ({numberOfProducts, setToggleCart, toggleCart, selectedProducts}) => {
  return (
    <header className='header_container'>
      <div className='header'>
      <h1>Products</h1>
      <button onClick={() => setToggleCart(!toggleCart)}>
        Handlekurv {numberOfProducts > 0 && `(${numberOfProducts})`}
      </button>
      </div>
      {toggleCart && (
        <div className='header_cart'>
          <HandleListe selectedProducts={selectedProducts} />
        </div>
      )}
    </header>
  );
};
