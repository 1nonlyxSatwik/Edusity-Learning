import React from 'react';
import './TrustBar.css';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const logos = ['NVIDIA', 'GOOGLE', 'OPENAI', 'META', 'DEEPMIND', 'TESLA'];

  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-wrapper">
          <p className="trust-label">Empowering Engineers at the World's Leading AI Labs</p>
          <div className="logo-track">
            {logos.concat(logos).map((logo, i) => (
              <span key={i} className="trust-logo">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
