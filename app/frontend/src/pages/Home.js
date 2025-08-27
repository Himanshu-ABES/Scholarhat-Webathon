import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Marquee from '../components/Marquee';

// Import assets
import videoplayback from '../assets/Assets/videoplayback.mp4';
import womenThumbnail from '../assets/Assets/Thumbnails/Women.jpg';
import menThumbnail from '../assets/Assets/Thumbnails/Men.jpg';
import coupleThumbnail from '../assets/Assets/Thumbnails/Couple.jpg';
import emilyImage from '../assets/Assets/Emily.jpg';
import alexImage from '../assets/Assets/Alex.jpg';
import taylorImage from '../assets/Assets/Taylor.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={videoplayback} type="video/mp4" />
        </video>
        <Header />
        <div className="content">
          <h2>The Holiday Season with Vintique</h2>
          <Link to="/discover">Discover the Gift Guide</Link>
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore">
        <h1>Explore</h1>
        <div className="explore-cards">
          <div className="card">
            <img src={womenThumbnail} alt="Women's Fashion" />
            <h5>Women's Fashion</h5>
            <Link to="/women">Shop for her</Link>
          </div>
          <div className="card">
            <img src={menThumbnail} alt="Men's Fashion" />
            <h5>Men's Fashion</h5>
            <Link to="/men">Shop for him</Link>
          </div>
          <div className="card">
            <img src={coupleThumbnail} alt="Partners in Fashion" />
            <h5>Partners in Fashion</h5>
            <Link to="#">Shop for them</Link>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <Marquee />

      {/* Description Section */}
      <div className="desc">
        <h1>WHY BUY VINTIQUE</h1>
        <p>
          Our products are designed based on the survey feedback of over 15,000 guys in our Level Up Fashion's Community. 
          Carefully crafted, tested and perfected for your styling needs.
        </p>
        <Link to="/about">
          SEE MORE <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      <hr color="black" />

      {/* Testimonials Section */}
      <div className="customers">
        <h1>Beyond the Fitting Room</h1>
        <div className="comments">
          <div className="review">
            <img src={emilyImage} alt="Customer Emily" />
            <h4>Emily ~</h4>
            <p>
              "Vintique captivates with its unique styles and impeccable quality. Each piece tells a fashion story, 
              merging vintage vibes with contemporary flair. It's not just clothing; it's an artistic expression 
              that resonates with my style."
            </p>
          </div>
          <div className="review">
            <img src={alexImage} alt="Customer Alex" />
            <h4>Alex ~</h4>
            <p>
              "Vintique redefines fashion. The fusion of nostalgia and modern trends creates a distinctive charm. 
              The fit is impeccable, and the brand's commitment to individuality shines through. It's more than 
              clothing; it's a style revelation."
            </p>
          </div>
          <div className="review">
            <img src={taylorImage} alt="Customer Taylor" />
            <h4>Taylor ~</h4>
            <p>
              "Vintique stands out in the fashion crowd. Diverse, quality pieces that elevate personal style. 
              The brand's dedication to uniqueness is evident in every design. It's not just apparel; it's a 
              style statement, curated for individual expression."
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
