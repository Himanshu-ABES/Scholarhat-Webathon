import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

const productData = {
  1: { 
    name: 'Petal Pikachu Elegance', 
    color: 'White with a hint of Pink', 
    fabric: 'Cotton', 
    price: 29.99, 
    reviews: 4.5, 
    image: women1 
  },
  2: { 
    name: 'Midnight Bunny Chic', 
    color: 'Dark Black', 
    fabric: 'Cotton', 
    price: 29.99, 
    reviews: 4.5, 
    image: women2 
  },
  3: { 
    name: 'Snowy Simplicity', 
    color: 'Plain White', 
    fabric: 'Cotton', 
    price: 29.99, 
    reviews: 4.5, 
    image: women3 
  },
  4: { 
    name: 'Ivory Cloud Comfort', 
    color: 'Light Brown', 
    fabric: 'Comfy Material', 
    price: 29.99, 
    reviews: 4.5, 
    image: women4 
  },
  5: { 
    name: 'Rose Petal Cozy', 
    color: 'Petals of White Rose with a hint of Pink', 
    fabric: 'Soft Material', 
    price: 29.99, 
    reviews: 4.5, 
    image: women5 
  },
  6: { 
    name: 'Cocoa Bliss Cozy', 
    color: 'Comfy Brown', 
    fabric: 'Cozy Material', 
    price: 29.99, 
    reviews: 4.5, 
    image: women6 
  },
  7: { 
    name: 'Contrast Harmony Ensemble', 
    color: 'Half White and Half Black', 
    fabric: 'High-Quality Material', 
    price: 29.99, 
    reviews: 4.5, 
    image: women7 
  },
  8: { 
    name: 'Arctic Elegance Coat', 
    color: 'Red', 
    fabric: 'Silk', 
    price: 49.99, 
    reviews: 4.0, 
    image: women8 
  },
  9: { 
    name: 'Cub Cozy Jacket', 
    color: 'Light Brown', 
    fabric: 'Cub Fur', 
    price: 49.99, 
    reviews: 4.0, 
    image: women9 
  }
};

function Compare() {
  const [product1, setProduct1] = useState('1');
  const [product2, setProduct2] = useState('1');
  const [comparisonData, setComparisonData] = useState({ product1: null, product2: null });

  useEffect(() => {
    const updateComparison = () => {
      setComparisonData({
        product1: productData[product1],
        product2: productData[product2]
      });
    };
    
    updateComparison();
  }, [product1, product2, productData]);

  const handleProduct1Change = (e) => {
    setProduct1(e.target.value);
  };

  const handleProduct2Change = (e) => {
    setProduct2(e.target.value);
  };

  return (
    <div className="compare-page">
      <ScrollToTop />
      <Header />
      
      <div className="comparison-container">
        <label htmlFor="product1">Select Product 1:</label>
        <select 
          id="product1" 
          value={product1} 
          onChange={handleProduct1Change} 
          className="custom-select"
        >
          <option value="1">Petal Pikachu Elegance</option>
          <option value="2">Midnight Bunny</option>
          <option value="3">Snowy Simplicity</option>
          <option value="4">Ivory Cloud Comfort</option>
          <option value="5">Rose Petal Cozy</option>
          <option value="6">Cocoa Bliss Cozy</option>
          <option value="7">Contrast Harmony Ensemble</option>
          <option value="8">Arctic Elegance Coat</option>
          <option value="9">Cub Cozy Jacket</option>
        </select>

        <label htmlFor="product2">Select Product 2:</label>
        <select 
          id="product2" 
          value={product2} 
          onChange={handleProduct2Change} 
          className="custom-select"
        >
          <option value="1">Petal Pikachu Elegance</option>
          <option value="2">Midnight Bunny</option>
          <option value="3">Snowy Simplicity</option>
          <option value="4">Ivory Cloud Comfort</option>
          <option value="5">Rose Petal Cozy</option>
          <option value="6">Cocoa Bliss Cozy</option>
          <option value="7">Contrast Harmony Ensemble</option>
          <option value="8">Arctic Elegance Coat</option>
          <option value="9">Cub Cozy Jacket</option>
        </select>

        <div className="comparison-results">
          {comparisonData.product1 && comparisonData.product2 && (
            <>
              <h3>Comparison Results:</h3>
              <p>
                <strong>Product 1:</strong> Color: {comparisonData.product1.color}, 
                Fabric: {comparisonData.product1.fabric}, 
                Price: ${comparisonData.product1.price}, 
                Reviews: {comparisonData.product1.reviews}
              </p>
              <p>
                <strong>Product 2:</strong> Color: {comparisonData.product2.color}, 
                Fabric: {comparisonData.product2.fabric}, 
                Price: ${comparisonData.product2.price}, 
                Reviews: {comparisonData.product2.reviews}
              </p>
              
              <div className="product-image-container">
                <img 
                  src={comparisonData.product1.image} 
                  alt="Product 1" 
                  className="product-image"
                />
                <img 
                  src={comparisonData.product2.image} 
                  alt="Product 2" 
                  className="product-image"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Compare;
