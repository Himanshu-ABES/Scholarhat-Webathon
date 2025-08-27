import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

// Import men's clothing images
import men1 from '../assets/Assets/Men\'s Clothings/1.jpg';
import men2 from '../assets/Assets/Men\'s Clothings/2.jpg';
import men3 from '../assets/Assets/Men\'s Clothings/3.jpg';
import men4 from '../assets/Assets/Men\'s Clothings/4.jpg';
import men5 from '../assets/Assets/Men\'s Clothings/5.jpg';
import men6 from '../assets/Assets/Men\'s Clothings/6.jpg';
import men7 from '../assets/Assets/Men\'s Clothings/7.jpg';
import men8 from '../assets/Assets/Men\'s Clothings/8.jpg';
import men9 from '../assets/Assets/Men\'s Clothings/9.jpg';

const Men = () => {
  const menProducts = [
    { id: 1, image: men1, price: '$19.99' },
    { id: 2, image: men2, price: '$19.99' },
    { id: 3, image: men3, price: '$19.99' },
    { id: 4, image: men4, price: '$19.99' },
    { id: 5, image: men5, price: '$19.99' },
    { id: 6, image: men6, price: '$19.99' },
    { id: 7, image: men7, price: '$19.99' },
    { id: 8, image: men8, price: '$19.99' },
    { id: 9, image: men9, price: '$19.99' },
    { id: 10, image: men2, price: '$29.99' }, // Additional item as in original
  ];

  return (
    <div className="men">
      <div className="home">
        <Header />
      </div>

      <div className="men-store-container">
        <div className="men-store">
          <h1>Men's Fashion</h1>
          <div className="products-grid">
            {menProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={`Men's Fashion Item ${product.id}`} />
                <div className="product-info">
                  <h5>{product.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <p>&copy; Vintique 2023 All Rights Reserved.</p>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Men;
