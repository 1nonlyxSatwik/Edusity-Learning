import React from 'react';
import { motion } from 'framer-motion';
import './Cohorts.css';

const COHORTS = [
  {
    id: 1,
    title: "Generative AI Bootcamp",
    duration: "8 Weeks",
    mentor: "Dr. Sarah Chen",
    projects: 4,
    tags: ["Live", "Capstone"],
  },
  {
    id: 2,
    title: "ML Foundations",
    duration: "6 Weeks",
    mentor: "Alex Rivera",
    projects: 3,
    tags: ["Beginner", "Hands-on"],
  },
  {
    id: 3,
    title: "Prompt Engineering",
    duration: "4 Weeks",
    mentor: "Jason Wright",
    projects: 5,
    tags: ["Trending", "Tools"],
  },
  {
    id: 4,
    title: "AI Agents",
    duration: "10 Weeks",
    mentor: "Elena Rostova",
    projects: 2,
    tags: ["Advanced", "Research"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const Cohorts = () => {
  return (
    <section className="co-section" id="cohorts">
      <div className="container">
        <motion.div className="co-header" {...fadeUp(0)}>
          <span className="section-label">// Live learning</span>
          <h2 className="co-title">
            Featured <span className="fraunces">Cohorts</span>
          </h2>
        </motion.div>

        <div className="co-grid">
          {COHORTS.map((c, i) => (
            <motion.div 
              key={c.id} 
              className="co-card liquid-glass"
              {...fadeUp(0.1 + i * 0.1)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="co-card-tags">
                {c.tags.map(t => <span key={t} className="co-tag">{t}</span>)}
              </div>
              <h3>{c.title}</h3>
              <div className="co-details">
                <div className="co-detail">
                  <span className="detail-val">{c.duration}</span>
                  <span className="detail-label">Duration</span>
                </div>
                <div className="co-detail">
                  <span className="detail-val">{c.projects}</span>
                  <span className="detail-label">Projects</span>
                </div>
              </div>
              <div className="co-mentor-row">
                <div className="mentor-dot"></div>
                <span>{c.mentor}</span>
              </div>
              <button className="co-btn">Preview Syllabus</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cohorts;
