import React, { useState, useEffect } from 'react';
import HeaderWithCart from './HeaderWithCart';

const Component = () => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = (product) => {
    const productExist = selectedProducts.find(
      (item) => item.id === product.id
    );
    if (productExist) {
      setSelectedProducts(
        selectedProducts.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, []);

  const numberOfProducts = selectedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <HeaderWithCart
        selectedProducts={selectedProducts}
        numberOfProducts={numberOfProducts}
      />
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="card-items">
            <h5 className="card-title">{product.title}</h5>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
          <p className="card-text">{product.description}</p>
          <div>
            {product.images.map((image) => (
              <img
                src={image}
                alt={image}
                height={500}
                width={500}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Component;
