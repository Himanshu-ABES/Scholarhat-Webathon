import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="logo"></Link>

        <nav className="navbar">
          <Link to="/"><i className="bi bi-house"></i></Link>
          <Link to="#"><i className="bi bi-bag"></i></Link>
          <Link to="/login"><i className="bi bi-person"></i></Link>
          <Link to="#"><i className="bi bi-search"></i></Link>
        </nav>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className="bi bi-list"></i>
        </button>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-nav-close" onClick={toggleMobileMenu}>
          <i className="bi bi-x"></i>
        </button>
        <Link to="/" onClick={closeMobileMenu}><i className="bi bi-house"></i> Home</Link>
        <Link to="#" onClick={closeMobileMenu}><i className="bi bi-bag"></i> Cart</Link>
        <Link to="/login" onClick={closeMobileMenu}><i className="bi bi-person"></i> Login</Link>
        <Link to="#" onClick={closeMobileMenu}><i className="bi bi-search"></i> Search</Link>
        <Link to="/women" onClick={closeMobileMenu}>Women's Fashion</Link>
        <Link to="/men" onClick={closeMobileMenu}>Men's Fashion</Link>
        <Link to="/discover" onClick={closeMobileMenu}>Discover</Link>
        <Link to="/about" onClick={closeMobileMenu}>About</Link>
      </div>
    </>
  );
};

export default Header;
