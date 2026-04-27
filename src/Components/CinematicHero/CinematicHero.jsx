import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroBackground from './HeroBackground';
import BlurText from './BlurText';
import './CinematicHero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const CinematicHero = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-wrap">
      <HeroBackground />
      
      {/* Navbar */}
      <nav className={`nav-fixed ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container container">
          <div className="nav-logo" onClick={() => navigate('/')}>
            <div className="logo-icon">e</div>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#courses">Courses</a>
            <a href="#cohorts">Live Cohorts</a>
            <a href="#practice">Practice</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="nav-cta-btn" onClick={() => navigate('/player')}>
            Start Free Lesson
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-container container">
        <div className="hero-content">
          <motion.div className="announcement-pill" {...fadeUp(0.1)}>
            <span className="pill-dot"></span>
            New · Live AI-Powered Learning Cohorts — 2026
          </motion.div>

          <h1 className="hero-title fraunces">
            Master AI Skills <br />
            Through Real Projects <br />
            Live Mentors
          </h1>

          <motion.p className="hero-subtext" {...fadeUp(0.3)}>
            Build industry-grade AI projects with expert mentors <br />
            and an AI tutor that never sleeps.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.4)}>
            <button className="btn-primary" onClick={() => navigate('/dashboard')}>
              Start Learning Free <span className="arrow">→</span>
            </button>
          </motion.div>

          <motion.div className="hero-stats-row" {...fadeUp(0.5)}>
            <div className="hero-stat-card liquid-glass">
              <span className="h-stat-val">12K+</span>
              <span className="h-stat-label">Active Learners</span>
            </div>
            <div className="hero-stat-card liquid-glass">
              <span className="h-stat-val">4.8★</span>
              <span className="h-stat-label">Average Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
