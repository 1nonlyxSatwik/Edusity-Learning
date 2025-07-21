import './Navbar.css';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <img src={logo} alt="EduSpark Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>Program</Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link>
          </li>
          <li>
            <Link to="Testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link>
          </li>
          
          <li>
            <Link to="contact" smooth={true} offset={0} duration={500} className="btn">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
