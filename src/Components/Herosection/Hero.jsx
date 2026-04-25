import React from 'react';
import './hero.css';
import dashboard from '../../assets/dashboard.png';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content reveal active">
          <div className="hero-badge">New: AI-Powered Learning Path</div>
          <h1>Ignite Your <br /> <span className="text-gradient">Learning Journey</span></h1>
          <p>
            Experience the next generation of education. EduSity combines world-class 
            content with advanced analytics to help you grow, learn, and succeed in 
            a world full of opportunities.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
          <div className="hero-stats">
            <span>+10k students already joined</span>
          </div>
        </div>
        <div className="hero-visual reveal active">
          <div className="visual-wrapper">
            <img src={dashboard} alt="Educational Dashboard" className="hero-img" />
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
