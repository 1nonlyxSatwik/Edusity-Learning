import React from 'react';
import { motion } from 'framer-motion';
import './Walkthrough.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const Walkthrough = () => {
  return (
    <section className="wt-section" id="practice">
      <div className="container">
        <motion.div className="wt-header" {...fadeUp(0)}>
          <span className="section-label">// Experience</span>
          <h2 className="wt-title">
            See How Learning <br />
            <span className="fraunces">Feels</span>
          </h2>
        </motion.div>

        <div className="wt-grid">
          {/* Video Player Mockup */}
          <motion.div className="wt-video-card liquid-glass" {...fadeUp(0.1)}>
            <div className="card-dots">
              <span className="cdot-r"></span>
              <span className="cdot-y"></span>
              <span className="cdot-g"></span>
            </div>
            <div className="video-inner">
              <div className="video-placeholder">
                <div className="play-circle">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
              <div className="video-overlay-bottom">
                <div className="v-progress-bar">
                  <div className="v-progress-fill"></div>
                </div>
                <div className="v-meta">
                  <span className="v-title">Module 3.1: Neural Architecture</span>
                  <span className="v-time">12:45 / 45:00</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="wt-right-col">
            {/* AI Tutor Chat Card */}
            <motion.div className="wt-chat-card liquid-glass" {...fadeUp(0.2)}>
              <div className="chat-header">
                <span className="ai-badge">AI</span>
                <span className="chat-status">Orion Copilot</span>
              </div>
              <div className="chat-bubbles">
                <div className="msg ai">"Can you explain the difference between supervised and unsupervised learning?"</div>
                <div className="msg user">"Supervised uses labeled data, unsupervised finds patterns in unlabeled data."</div>
                <div className="msg ai">"Excellent! Let's dig deeper into clustering algorithms next."</div>
              </div>
            </motion.div>

            <div className="wt-side-cards">
              {/* Quiz Card */}
              <motion.div className="wt-mini-card liquid-glass" {...fadeUp(0.3)}>
                <p className="mini-q">What is backpropagation?</p>
                <div className="mini-opts">
                  <div className="mini-opt active">
                    <span className="opt-dot"></span>
                    Gradient descent
                  </div>
                  <div className="mini-opt">
                    <span className="opt-dot"></span>
                    Forward pass
                  </div>
                </div>
              </motion.div>

              {/* Streak Card */}
              <motion.div className="wt-mini-card liquid-glass" {...fadeUp(0.35)}>
                <div className="streak-icon">🔥</div>
                <span className="streak-val">14 Day Streak</span>
                <div className="xp-mini-bar">
                  <div className="xp-mini-fill"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
