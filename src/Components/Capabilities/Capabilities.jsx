import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineShieldCheck } from 'react-icons/hi';
import './Capabilities.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const FEATURES = [
  {
    title: 'AI Tutor',
    desc: 'Instant, personalized explanations on any topic, adapted to your pace.',
    tags: ['Context-Aware', '24/7 Support'],
    icon: <HiOutlineLightBulb />
  },
  {
    title: 'Live Cohorts',
    desc: 'Expert-led sessions with peer reviews and a capstone portfolio project.',
    tags: ['Live Sessions', 'Peer Network'],
    icon: <HiOutlineUserGroup />
  },
  {
    title: 'Adaptive Quizzes',
    desc: 'Smart questions that reinforce weak spots through spaced repetition.',
    tags: ['Instant Feedback', 'Skill Sync'],
    icon: <HiOutlineShieldCheck />
  }
];

const Capabilities = () => {
  return (
    <section className="cap-section" id="courses">
      <div className="container cap-container">
        <div className="cap-left">
          <motion.h2 className="cap-title fraunces" {...fadeUp(0)}>
            Learning <br />
            <em>evolved</em>
          </motion.h2>
        </div>
        
        <div className="cap-right">
          {FEATURES.map((feat, i) => (
            <motion.div 
              key={feat.title}
              className="cap-feat-card liquid-glass"
              {...fadeUp(0.1 + i * 0.1)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feat-icon-box">{feat.icon}</div>
              <div className="feat-info">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
                <div className="feat-tags">
                  {feat.tags.map(t => <span key={t} className="feat-tag liquid-glass">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
