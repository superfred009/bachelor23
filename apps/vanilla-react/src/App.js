import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import HandleListe from './components/HandleListe';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const addToCart = (product) => {
    const newProduct = { ...product };
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, newProduct]);
  };
  

  return (
    <div>
      <Header />
      <div>Dette er en react app</div>
      <div className='App'>
        <HandleListe selectedProducts={selectedProducts} />
      </div>
      {products.map((product) => (
        <div key={product.id} className="card col-6">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div>
              {product.images.map((image) => (
                <img src={image} key={image} alt={image} />
              ))}
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
