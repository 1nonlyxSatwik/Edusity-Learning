import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const Footer = () => {
  return (
    <footer className="ft-section">
      <div className="container">
        <div className="ft-top">
          <motion.div className="ft-brand" {...fadeUp(0)}>
            <div className="logo-circle">e</div>
            <p>Master AI skills through real projects with world-class mentors.</p>
          </motion.div>
          
          <div className="ft-links-grid">
            <motion.div className="ft-col" {...fadeUp(0.1)}>
              <h4>Platform</h4>
              <a href="#">Courses</a>
              <a href="#">Live Cohorts</a>
              <a href="#">Projects</a>
            </motion.div>
            <motion.div className="ft-col" {...fadeUp(0.2)}>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </motion.div>
            <motion.div className="ft-col" {...fadeUp(0.3)}>
              <h4>Social</h4>
              <a href="#">Twitter</a>
              <a href="#">GitHub</a>
              <a href="#">Discord</a>
            </motion.div>
          </div>
        </div>

        <div className="ft-bottom">
          <p>© 2026 EduSpark Learning. All rights reserved.</p>
          <div className="ft-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
