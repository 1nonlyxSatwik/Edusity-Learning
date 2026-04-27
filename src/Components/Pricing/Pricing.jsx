import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck } from 'react-icons/hi';
import './Pricing.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const Pricing = () => {
  return (
    <section className="pr-section" id="pricing">
      <div className="container">
        <motion.div className="pr-header" {...fadeUp(0)}>
          <span className="section-label">// Pricing</span>
          <h2 className="pr-title">
            Simple <span className="fraunces">Plans</span>
          </h2>
        </motion.div>

        <div className="pr-grid">
          <motion.div className="pr-card liquid-glass" {...fadeUp(0.1)} whileHover={{ scale: 1.02 }}>
            <span className="plan-name">Free</span>
            <div className="plan-price">$0<span>/mo</span></div>
            <p className="plan-desc">Perfect for exploring the fundamentals of AI.</p>
            <ul className="plan-features">
              <li><HiOutlineCheck /> 5 Lessons/month</li>
              <li><HiOutlineCheck /> AI Tutor (Standard)</li>
              <li><HiOutlineCheck /> Public Community</li>
            </ul>
            <button className="pr-btn">Get Started</button>
          </motion.div>

          <motion.div className="pr-card liquid-glass featured" {...fadeUp(0.2)} whileHover={{ scale: 1.02 }}>
            <div className="card-badge">Most Popular</div>
            <span className="plan-name">Pro</span>
            <div className="plan-price">$29<span>/mo</span></div>
            <p className="plan-desc">Full access to everything for serious learners.</p>
            <ul className="plan-features">
              <li><HiOutlineCheck /> Unlimited Lessons</li>
              <li><HiOutlineCheck /> AI Orion Copilot (Pro)</li>
              <li><HiOutlineCheck /> 1-on-1 Mentor Sessions</li>
              <li><HiOutlineCheck /> Priority Deployments</li>
            </ul>
            <button className="pr-btn btn-accent">Unlock Pro Access</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
