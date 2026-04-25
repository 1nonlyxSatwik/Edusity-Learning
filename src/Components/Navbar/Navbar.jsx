import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-text">EduSity</div>
        <ul className="nav-links">
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Platform</Link></li>
          <li><Link to="programs" smooth={true} offset={-80} duration={500}>Programs</Link></li>
          <li><Link to="features" smooth={true} offset={-80} duration={500}>Features</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-80} duration={500}>Reviews</Link></li>
        </ul>
        <div className="nav-btns">
          <button className="btn-login">Log in</button>
          <button className="btn-primary">Join now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
