import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo accent-gradient">EduSpark</span>
            <p>The Future of AI Learning.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Roadmap</a>
              <a href="#">Pricing</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 EduSpark AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
