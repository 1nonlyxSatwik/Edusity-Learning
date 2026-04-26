import React from 'react';
import './ImmersiveRoadmap.css';

const ImmersiveRoadmap = () => {
  const steps = [
    {
      year: "Phase 01",
      title: "Cognitive Onboarding",
      desc: "Our neural algorithms analyze your current expertise and map out the most efficient path to mastery.",
      side: "right"
    },
    {
      year: "Phase 02",
      title: "Deep Immersive Synthesis",
      desc: "Engage in hyper-realistic simulations where you solve complex industry challenges in real-time.",
      side: "left"
    },
    {
      year: "Phase 03",
      title: "Collaborative Intelligence",
      desc: "Work with a global cohort on high-impact projects, backed by $500M+ in partner resources.",
      side: "right"
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <div className="roadmap-header reveal-up">
          <h2 className="oversized-heading text-gradient-premium">The Journey.</h2>
        </div>

        <div className="roadmap-track">
          <div className="roadmap-line"></div>
          
          {steps.map((step, idx) => (
            <div className={`roadmap-step ${step.side} reveal-up`} key={idx}>
              <div className="step-content glass-panel">
                <span className="step-year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="step-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmersiveRoadmap;
