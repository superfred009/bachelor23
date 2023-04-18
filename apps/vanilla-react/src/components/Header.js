import React from 'react';
import './header.css';
import {HandleListe} from './HandleListe';

export const Header = ({numberOfProducts, setToggleCart, toggleCart, selectedProducts}) => {
  return (
    <header>
      <div>
      <h1 className="header">Producst</h1>
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
