import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-container">

          <div className="footer-section">
            <h3>EduSity</h3>
            <p>
              Fueling the future of learning with interactive tools, smart insights, and creative challenges for curious minds.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <p>eduspark.edu.9@gmail.com</p>
            <p>+1 (800) 123-4567</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Edusity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
