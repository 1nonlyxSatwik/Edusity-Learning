import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const tiers = [
    {
      name: "Explorer",
      price: "Free",
      features: ["Micro-lessons", "Adaptive Quizzes", "Community Access", "Public Profile"],
      btn: "Get Started",
      accent: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      features: ["Full AI Path Access", "1:1 Mentor Sessions", "Certification Prep", "Priority AI Support"],
      btn: "Go Pro",
      accent: true
    },
    {
      name: "Team",
      price: "$99",
      period: "/mo",
      features: ["Cohort Learning", "Team Analytics", "Custom Roadmaps", "LMS Integration"],
      btn: "Contact Sales",
      accent: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-huge text-gradient">Simple Pricing</h2>
          <p className="section-description mx-auto">Access the full potential of the AI Learning OS.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((t, i) => (
            <div key={i} className={`pricing-card glass ${t.accent ? 'featured' : ''}`}>
              <h3>{t.name}</h3>
              <div className="price">
                <span className="amount">{t.price}</span>
                <span className="period">{t.period}</span>
              </div>
              <ul className="pricing-features">
                {t.features.map((f, j) => (
                  <li key={j}>✦ {f}</li>
                ))}
              </ul>
              <button className={`btn ${t.accent ? 'btn-primary' : 'btn-secondary'}`}>{t.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
