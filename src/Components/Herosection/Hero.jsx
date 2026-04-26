import React from 'react';
import './hero.css';
import ecosystem from '../../assets/ecosystem.png';
import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <section id="hero" className="hero-editorial">
      <div className="mesh-glow"></div>
      
      <div className="container hero-editorial-grid">
        <div className="hero-editorial-content">
          <div className="badge-premium reveal-up active">
            <span>Next Generation Platform</span>
          </div>
          
          <h1 className="oversized-heading reveal-up active" style={{ transitionDelay: '0.1s' }}>
            Elevate Your <br />
            <span className="text-gradient-premium">Intelligence.</span>
          </h1>
          
          <p className="hero-editorial-sub reveal-up active" style={{ transitionDelay: '0.2s' }}>
            The future of specialized education is decentralized, adaptive, and immersive. 
            Join the elite community of 50,000+ pioneers mastering the complex skills of tomorrow.
          </p>
          
          <div className="hero-editorial-actions reveal-up active" style={{ transitionDelay: '0.3s' }}>
            <button className="btn-magnetic primary">
              Start Your Journey <HiArrowRight />
            </button>
            <button className="btn-magnetic secondary">
              Explore Ecosystem
            </button>
          </div>

          <div className="hero-editorial-metrics reveal-up active" style={{ transitionDelay: '0.4s' }}>
            <div className="metric">
              <span className="metric-val">98%</span>
              <span className="metric-label">Placement Velocity</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric">
              <span className="metric-val">120+</span>
              <span className="metric-label">Neural Pathways</span>
            </div>
          </div>
        </div>

        <div className="hero-editorial-visual reveal-scale active" style={{ transitionDelay: '0.5s' }}>
          <div className="visual-orb-container">
            <img src={ecosystem} alt="Learning Ecosystem" className="floating-ecosystem animate-float" />
            <div className="visual-ambient-glow"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
