import React from 'react';
import './Footer.css';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-text">EduSity</div>
          <p>Redefining the future of learning.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
        <div className="footer-social">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 EduSity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
