import React from 'react';
import './HorizontalShowcase.css';

const HorizontalShowcase = () => {
  const items = [
    {
      title: "Neural Learning",
      tag: "Intelligence",
      desc: "Experience education that adapts to your brain's unique wiring.",
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
    },
    {
      title: "Immersive Virtuals",
      tag: "Experience",
      desc: "Step into virtual labs that feel indistinguishable from reality.",
      gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
    },
    {
      title: "Decentralized Growth",
      tag: "Network",
      desc: "Join a global peer-to-peer network of the world's brightest minds.",
      gradient: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)"
    }
  ];

  return (
    <section id="showcase" className="showcase-section">
      <div className="container">
        <div className="showcase-header reveal-up">
          <span className="showcase-tag">Excellence</span>
          <h2 className="showcase-title">Pioneering a new <br /> standard in education.</h2>
        </div>
      </div>
      
      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-track">
          {items.map((item, idx) => (
            <div className="showcase-card reveal-scale" key={idx} style={{ background: item.gradient }}>
              <div className="card-content">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
