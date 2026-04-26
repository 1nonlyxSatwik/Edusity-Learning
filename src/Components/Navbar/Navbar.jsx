import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar glass">
      <div className="container navbar-content">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <span className="accent-gradient">EduSpark</span>
        </div>
        <div className="nav-links">
          <a href="#features">Product</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-actions">
          <button className="btn btn-secondary" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-primary" onClick={() => navigate('/player')}>Try Free Lesson</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
