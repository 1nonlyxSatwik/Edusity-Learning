import React from 'react';
import './aboutus.css';
import { HiLightningBolt, HiShieldCheck, HiUserGroup, HiGlobe } from "react-icons/hi";

const WhyChooseUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="text-gradient">Why Choose EduSity</h2>
          <p>Everything you need to master your field, in one place.</p>
        </div>
        <div className="bento-grid">
          <div className="bento-item main reveal glass">
            <HiLightningBolt className="bento-icon" />
            <h3>Lightning Fast Learning</h3>
            <p>Our micro-learning modules are designed to help you absorb complex concepts in minutes, not hours.</p>
          </div>
          <div className="bento-item reveal glass">
            <HiShieldCheck className="bento-icon" />
            <h3>Accredited Mastery</h3>
            <p>Boost your resume with our accredited certificates.</p>
          </div>
          <div className="bento-item reveal glass">
            <HiUserGroup className="bento-icon" />
            <h3>Expert Mentors</h3>
            <p>Learn from the top 1% of industry experts.</p>
          </div>
          <div className="bento-item wide reveal glass">
            <HiGlobe className="bento-icon" />
            <h3>Learn From Anywhere</h3>
            <p>Seamlessly switch between devices and continue your progress offline with our native app experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
