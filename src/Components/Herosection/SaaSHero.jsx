import React, { useState, useEffect } from 'react';
import './SaaSHero.css';
import playerImg from '../../assets/player.png';

const SaaSHero = () => {
  const [step, setStep] = useState(1); // 1: Video, 2: Quiz, 3: Feedback, 4: Locked
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setStep(2);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <section className="hero">
      <div className="container grid-cols-2">
        <div className="hero-content fade-in">
          <div className="tag glass">YC Funded • Series A</div>
          <h1 className="text-huge text-gradient">
            The AI Learning <br />
            <span className="accent-gradient">Operating System.</span>
          </h1>
          <p className="hero-description">
            EduSpark isn't a course marketplace. It's an intelligent ecosystem that maps your brain, adapts to your pace, and builds your future via personalized AI mentorship.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => setStep(1)}>Try Free Lesson</button>
            <button className="btn btn-secondary">Take 5-Min AI Quiz</button>
          </div>
          <div className="hero-stats">
            <div>
              <span className="stat-value">98%</span>
              <span className="stat-label">Retention</span>
            </div>
            <div className="divider"></div>
            <div>
              <span className="stat-value">12k+</span>
              <span className="stat-label">Active Learners</span>
            </div>
          </div>
        </div>

        <div className="hero-demo fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="browser-mockup glass">
            <div className="browser-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="address-bar">eduspark.ai/demo-lesson</div>
            </div>
            <div className="browser-content">
              {step === 1 && (
                <div className="demo-video">
                  <img src={playerImg} alt="Player" className="demo-img" />
                  <div className="video-overlay">
                    <div className="play-button flex-center">
                      <div className="play-icon"></div>
                    </div>
                    <div className="video-progress">
                      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                  <div className="demo-label">Micro-Lecture: Neural Architecture</div>
                </div>
              )}

              {step === 2 && (
                <div className="demo-quiz">
                  <h3>Adaptive Quiz: Concept Check</h3>
                  <p>Which layer in a Neural Network is responsible for feature extraction?</p>
                  <div className="quiz-options">
                    <button className="quiz-option glass" onClick={() => setStep(3)}>Input Layer</button>
                    <button className="quiz-option glass" onClick={() => setStep(3)}>Hidden Layer</button>
                    <button className="quiz-option glass" onClick={() => setStep(3)}>Output Layer</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="demo-feedback">
                  <div className="ai-badge">AI ANALYSIS</div>
                  <h3>Analysis: 80% Mastery</h3>
                  <p>You've grasped the core concepts. To reach 100%, you need to explore backpropagation in depth.</p>
                  <button className="btn btn-primary mt-4" onClick={() => setStep(4)}>Continue Learning</button>
                </div>
              )}

              {step === 4 && (
                <div className="demo-locked flex-center">
                  <div className="locked-content text-center">
                    <div className="lock-icon">🔒</div>
                    <h3>Unlock Full Path</h3>
                    <p>Enroll now to access 40+ hours of advanced content and 1:1 mentor sessions.</p>
                    <button className="btn btn-primary">Enroll in AI Engineer Path</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSHero;
