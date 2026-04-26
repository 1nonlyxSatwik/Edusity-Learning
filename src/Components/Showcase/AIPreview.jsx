import React from 'react';
import './AIPreview.css';
import { motion } from 'framer-motion';
import { HiChatAlt2, HiVariable, HiCode } from 'react-icons/hi';

const AIPreview = () => {
  return (
    <section className="ai-preview-section section-padding">
      <div className="container">
        <div className="ai-preview-grid">
          <div className="ai-info">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="ai-badge"
            >
              Powered by EduSpark AI
            </motion.div>
            <h2 className="text-gradient">Meet Your <br /> Personal Copilot.</h2>
            <p>Our AI analyzes your learning style, predicts hurdles, and creates custom practice environments just for you.</p>
            
            <div className="ai-feature-list">
              <div className="ai-f-item">
                <div className="ai-f-icon"><HiChatAlt2 /></div>
                <div>
                  <h4>Contextual Chat</h4>
                  <p>Ask about any slide or code snippet. AI knows exactly what you're looking at.</p>
                </div>
              </div>
              <div className="ai-f-item">
                <div className="ai-f-icon"><HiVariable /></div>
                <div>
                  <h4>Adaptive Quizzes</h4>
                  <p>AI generates quizzes based on your weak points from last night's lecture.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-demo-window glass-panel luminous-border">
            <div className="demo-header">
              <div className="demo-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="demo-title">AI TUTOR: ORION</div>
            </div>
            <div className="demo-chat">
              <div className="chat-msg user">
                "I don't understand backpropagation. Can you explain it with a visual?"
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="chat-msg ai"
              >
                "Think of backpropagation like a teacher giving feedback. After a guess, we measure the error and work backwards to adjust each student's (neuron's) contribution. Here's a custom chart for you..."
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="chat-viz glass-panel"
              >
                <div className="viz-bars">
                  <div className="v-bar" style={{ height: '80%' }}></div>
                  <div className="v-bar" style={{ height: '40%' }}></div>
                  <div className="v-bar" style={{ height: '90%' }}></div>
                  <div className="v-bar" style={{ height: '60%' }}></div>
                </div>
                <span>Error Distribution Graph</span>
              </motion.div>
            </div>
            <div className="demo-input">
              <span>Type your doubt...</span>
              <HiCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPreview;
