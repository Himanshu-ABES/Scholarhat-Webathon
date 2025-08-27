import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

// Import collection images
import menCollection from '../assets/Collection/Men/Men.jpg';
import menRing from '../assets/Collection/Men/ring.jpg';
import menHoody from '../assets/Collection/Men/hoody.jpg';
import menShoes from '../assets/Collection/Men/shoes.jpg';
import menPants from '../assets/Collection/Men/pants.jpg';

import womenCollection from '../assets/Collection/Women/women.jpg';
import womenBag from '../assets/Collection/Women/bag.jpg';
import womenCoat from '../assets/Collection/Women/coat.jpg';
import womenInner from '../assets/Collection/Women/inner.jpg';
import womenBoot from '../assets/Collection/Women/boot.jpg';

const Discover = () => {
  const menItems = [
    { id: 1, image: menRing, price: '$99' },
    { id: 2, image: menHoody, price: '$99' },
    { id: 3, image: menShoes, price: '$99' },
    { id: 4, image: menPants, price: '$99' },
  ];

  const womenItems = [
    { id: 1, image: womenBag, price: '$99' },
    { id: 2, image: womenCoat, price: '$99' },
    { id: 3, image: womenInner, price: '$99' },
    { id: 4, image: womenBoot, price: '$99' },
  ];

  return (
    <div className="discover">
      <Header />
      
      <div className="discover-container">
        <div className="collection-bar">
          <h3>Cruise 2024 Collection</h3>
        </div>

        {/* Men's Collection Section */}
        <div className="collection-section">
          <div className="collection-hero">
            <img src={menCollection} alt="Men's Collection" />
          </div>
          <div className="collection-grid">
            {menItems.map((item) => (
              <div key={item.id} className="collection-card">
                <img src={item.image} alt={`Men's Item ${item.id}`} />
                <div className="card-body">
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Women's Collection Section */}
        <div className="collection-section">
          <div className="collection-hero">
            <img src={womenCollection} alt="Women's Collection" />
          </div>
          <div className="collection-grid">
            {womenItems.map((item) => (
              <div key={item.id} className="collection-card">
                <img src={item.image} alt={`Women's Item ${item.id}`} />
                <div className="card-body">
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Discover;
