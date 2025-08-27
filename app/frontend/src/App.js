import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

// Import pages
import Home from './pages/Home';
import Discover from './pages/Discover';
import Women from './pages/Women';
import Men from './pages/Men';
import Login from './pages/Login';
import About from './pages/About';
import Compare from './pages/Compare';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
