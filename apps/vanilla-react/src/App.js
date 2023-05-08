import './App.css';
import { Header } from './components/Header';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Request API data twice simultaneously
        const responsePromises = await Promise.all([
          fetch('https://dummyjson.com/products'),
          fetch('https://dummyjson.com/products'),
        ]);

        const dataResponses = await Promise.all(
          responsePromises.map((response) => response.json())
        );

        // Combine the data from both API calls
        const combinedData = dataResponses.flatMap(
          (response) => response.products
        );

        setProducts(combinedData);
        setLoaded(true);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    }
    fetchData();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
        numberOfProducts={numberOfProducts}
        selectedProducts={selectedProducts}
      />
      <div className="products-body">
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
                  key={image}
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
    </div>
  );
}


export default App;
