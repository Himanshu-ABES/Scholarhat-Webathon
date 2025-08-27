import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

// Import about image
import aboutImage from '../assets/Assets/about.jpg';

const About = () => {
  return (
    <div className="about">
      <Header />
      
      <div className="about-container">
        <div className="about-content">
          <div className="about-grid">
            <div className="about-text">
              <h1>Creator of quality designs and thinker of fresh ideas.</h1>
              <p>
                Introducing Vintique, where timeless elegance meets contemporary flair. Vintique is a brand that celebrates the beauty of vintage-inspired fashion, reimagined for the modern world. Each piece in our collection is meticulously crafted to evoke a sense of nostalgia while exuding sophistication and style.
              </p>
              <br />
              <p>
                At Vintique, we believe in the power of heritage and tradition, infused with a fresh perspective. Our garments reflect a seamless blend of classic silhouettes, luxurious fabrics, and intricate details, creating an effortlessly chic aesthetic that stands the test of time.
              </p>
              <br />
              <p>
                Inspired by the charm of yesteryears and the allure of bygone eras, Vintique offers a curated selection of apparel and accessories that cater to the discerning tastes of those who appreciate the finer things in life. From romantic dresses to tailored separates, every item is designed to inspire confidence and captivate attention.
              </p>
              <br />
              <p>
                Whether you're strolling through cobblestone streets or attending a glamorous soirée, Vintique ensures that you make a statement wherever you go. Embrace the allure of the past with a touch of modern sophistication—welcome to the world of Vintique.
              </p>
            </div>
            <div className="about-image-container">
              <img src={aboutImage} alt="About Vintique" className="about-image" />
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default About;
