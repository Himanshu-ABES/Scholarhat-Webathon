import React, { useState } from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with backend integration!');
  };

  return (
    <div className="login">
      <Header />
      
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <div className="form-links" style={{ 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '0.9rem'
          }}>
            <p>Don't have an account? <a href="#" style={{ color: 'var(--color-primary)' }}>Sign up</a></p>
            <p><a href="#" style={{ color: 'var(--color-primary)' }}>Forgot password?</a></p>
          </div>
        </form>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Login;
