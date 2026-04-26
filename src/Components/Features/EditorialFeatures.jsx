import React from 'react';
import './EditorialFeatures.css';
import { HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineCube } from 'react-icons/hi';

const EditorialFeatures = () => {
  return (
    <section id="features" className="editorial-features">
      <div className="container">
        <div className="asymmetric-grid reveal-up">
          <div className="editorial-feat-text">
            <span className="showcase-tag">Intelligence</span>
            <h2 className="oversized-heading">Built for the <br /> <span className="text-gradient-premium">Top 1%.</span></h2>
            <p>Our platform isn't for everyone. It's for the dedicated. The curious. The pioneers who want to master the unseen forces of the industry.</p>
          </div>
          <div className="editorial-feat-visual reveal-scale">
            <div className="feature-block glass-panel">
              <HiOutlineSparkles className="feat-icon" />
              <h3>Neural Adaptive Sync</h3>
              <p>Real-time learning optimization based on cognitive performance.</p>
            </div>
          </div>
        </div>

        <div className="asymmetric-grid reverse reveal-up" style={{ marginTop: '100px' }}>
          <div className="editorial-feat-visual reveal-scale">
            <div className="feature-block glass-panel highlight">
              <HiOutlineCube className="feat-icon" />
              <h3>Quantum Simulations</h3>
              <p>Complex environmental modeling for edge-case problem solving.</p>
            </div>
          </div>
          <div className="editorial-feat-text">
            <h2 className="oversized-heading">Limitless <br /> <span className="text-gradient-premium">Scale.</span></h2>
            <p>Deploy your knowledge across decentralized networks and gain real-world equity in emerging ecosystems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatures;
