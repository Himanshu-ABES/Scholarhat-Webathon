import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="references">
          <h6>Menu</h6>
          <Link to="#">Shop</Link>
          <Link to="#">Become an Ambassador</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Return Policy</Link>
          <Link to="#">Shipping Policy</Link>
          <Link to="#">Rewards Program</Link>
        </div>
        <div className="contact">
          <h6>Contact</h6>
          <p>Vintique Fashion Headquarters <br /> 123 Style Street, Suite 567</p>
          <p>+1-9245724115</p>
          <p>customercare@vintique.com</p>
        </div>
        <div className="social">
          <h6>Social</h6>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; Vintique 2023 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
