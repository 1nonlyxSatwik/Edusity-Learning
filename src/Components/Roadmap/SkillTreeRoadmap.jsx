import React from 'react';
import './SkillTreeRoadmap.css';
import roadmapImg from '../../assets/roadmap.png';

const SkillTreeRoadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="text-center mb-6">
          <div className="tag glass">Guided Progression</div>
          <h2 className="text-huge text-gradient">Interactive Roadmaps</h2>
          <p className="section-description mx-auto">Don't just take courses. Follow a proven, AI-guided path to mastery.</p>
        </div>

        <div className="roadmap-container glass fade-in">
          <img src={roadmapImg} alt="Skill Tree Roadmap" className="roadmap-img" />
          
          <div className="roadmap-overlay">
            <div className="path-card glass">
              <h4>AI Engineer Path</h4>
              <p>Master LLMs, RAG, and Agentic Workflows.</p>
              <div className="path-progress">
                <div className="bar" style={{ width: '68%' }}></div>
              </div>
              <button className="btn btn-primary btn-sm">Resume Path</button>
            </div>

            <div className="path-card glass locked">
              <h4>MLOps Specialist</h4>
              <p>Infrastructure, Deployment, and Scale.</p>
              <div className="lock">🔒</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTreeRoadmap;
