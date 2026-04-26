import React from 'react';
import './CinematicCTA.css';
import { HiOutlineSparkles } from 'react-icons/hi';

const CinematicCTA = () => {
  return (
    <section className="cinematic-cta">
      <div className="mesh-glow"></div>
      <div className="container">
        <div className="cta-cinematic-wrapper reveal-scale">
          <div className="cta-cinematic-content">
            <HiOutlineSparkles className="cta-icon-large animate-float" />
            <h2 className="oversized-heading">The Future Is <br /> <span className="text-gradient-premium">Now.</span></h2>
            <p>Don't just witness the revolution. Lead it.</p>
            <div className="cta-cinematic-btns">
              <button className="btn-magnetic primary">Join the Elite</button>
              <button className="btn-magnetic secondary">Schedule Consultation</button>
            </div>
          </div>
          <div className="cta-cinematic-bg-text">INTELLIGENCE</div>
        </div>
      </div>
    </section>
  );
};

export default CinematicCTA;
