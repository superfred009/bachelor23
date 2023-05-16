import { useEffect, useState } from 'react';

import Image from 'next/image';
import { Header } from './Header';

export const ProductsGrid = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

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

  return (
    <div>
      <Header
        selectedProducts={selectedProducts}
        numberOfProducts={numberOfProducts}
      />
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-items">
              <h5>{product.title}</h5>
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to cart
              </button>
            </div>
            <p>{product.description}</p>
            <div className="card-images">
              {product.images.map((image) => (
                <Image
                  src={image}
                  alt={`Image of ${product.title} `}
                  width={500}
                  height={500}
                  //loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
