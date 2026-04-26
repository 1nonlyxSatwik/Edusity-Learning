import React from 'react';
import './BentoFeatures.css';

const BentoFeatures = () => {
  const features = [
    {
      title: "AI Copilot Tutor",
      description: "A 24/7 intelligent mentor that answers questions, debugs code, and explains complex concepts in real-time.",
      size: "large",
      accent: "violet"
    },
    {
      title: "Adaptive Quizzes",
      description: "Dynamic assessments that evolve based on your performance, targeting your specific knowledge gaps.",
      size: "small",
      accent: "blue"
    },
    {
      title: "Project Sandbox",
      description: "Cloud-based environments where you can build and deploy real-world AI applications directly in your browser.",
      size: "small",
      accent: "white"
    },
    {
      title: "Progress Intelligence",
      description: "Deep analytics that track your skill growth, XP, and learning velocity across multiple disciplines.",
      size: "medium",
      accent: "blue"
    },
    {
      title: "Live Mentor Calls",
      description: "Schedule 1:1 sessions with industry experts from Google, OpenAI, and DeepMind.",
      size: "medium",
      accent: "violet"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="text-huge text-gradient">Product Modules</h2>
          <p className="section-description">Every tool you need to master the AI stack, unified in one OS.</p>
        </div>
        
        <div className="bento-grid">
          {features.map((f, i) => (
            <div key={i} className={`bento-card glass ${f.size} accent-${f.accent}`}>
              <div className="card-content">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
              <div className="card-visual">
                {/* Visuals would be sleek UI fragments */}
                <div className="visual-element"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
