import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const CheckoutForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [products, setProducts] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (router.query.products) {
      setProducts(JSON.parse(router.query.products));
    }
  }, [router.query.products]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay of 2 seconds before showing the success notification
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNotification(true);

      // Hide the success notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        type="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {showNotification && (
        <div>
          <p>Form submitted successfully!</p>
          <button onClick={() => router.push('/')}>Hjem</button>
        </div>
      )}
    </form>
  );
};