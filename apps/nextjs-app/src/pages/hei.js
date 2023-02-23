import { useEffect, useState } from 'react';

export default function Hei() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
      setLoaded(true);
    }
    fetchData();
  }, [products]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Dette er en react app</div>
      {products.map((product) => (
        <div key={product.id} className="card col-6">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div>
              {product.images.map((image) => (
                <img src={image} alt={image} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
