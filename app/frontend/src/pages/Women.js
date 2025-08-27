import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

// Import women's clothing images
import women1 from '../assets/Assets/Women\'s Clothings/1.jpg';
import women2 from '../assets/Assets/Women\'s Clothings/2.jpg';
import women3 from '../assets/Assets/Women\'s Clothings/3.jpg';
import women4 from '../assets/Assets/Women\'s Clothings/4.jpg';
import women5 from '../assets/Assets/Women\'s Clothings/5.jpg';
import women6 from '../assets/Assets/Women\'s Clothings/6.jpg';
import women7 from '../assets/Assets/Women\'s Clothings/7.jpg';
import women8 from '../assets/Assets/Women\'s Clothings/8.jpg';
import women9 from '../assets/Assets/Women\'s Clothings/9.jpg';

const Women = () => {
  const womenProducts = [
    { id: 1, image: women1, price: '$19.99' },
    { id: 2, image: women2, price: '$19.99' },
    { id: 3, image: women3, price: '$19.99' },
    { id: 4, image: women4, price: '$19.99' },
    { id: 5, image: women5, price: '$19.99' },
    { id: 6, image: women6, price: '$19.99' },
    { id: 7, image: women7, price: '$19.99' },
    { id: 8, image: women8, price: '$19.99' },
    { id: 9, image: women9, price: '$19.99' },
  ];

  return (
    <div className="women">
      <div className="home">
        <Header />
      </div>

      <div className="women-store-container">
        <div className="women-store">
          <h1>Women's Fashion</h1>
          <div className="products-grid">
            {womenProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={`Women's Fashion Item ${product.id}`} />
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

export default Women;
