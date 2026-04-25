import React from 'react';
import './MasterDegree.css';

function MasterDegree() {
  return (
    <div className="master-degree-page">

      <nav className="md-navbar">
        <h1>Master's Program</h1>
        <div className="md-links">
          <a href="#about">About</a>
          <a href="#facts">Facts</a>
          <a href="#benefits">Why It Matters</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <header className="md-hero">
        <h2 className="hero-title">Take Your Learning to the Next Level</h2>
        <p className="hero-subtitle">
          A Master’s degree isn’t just another certificate — it's a gateway to deeper skills, better roles, and more confidence.
        </p>
        <a href="#about" className="scroll-btn">Learn More</a>
      </header>


      <section id="about" className="md-section fade-in">
        <h2>So... What *is* a Master's?</h2>
        <p>
          In simple terms, it's a postgraduate degree you can pursue after your bachelor's. Whether it’s in tech, business, design or science — it helps you go deeper, build sharper skills, and stand out.
        </p>
        <p>
          It's not just about reading textbooks. It's research, hands-on projects, critical thinking... and yes, probably a lot of coffee.
        </p>
      </section>


      <section id="facts" className="md-section fade-in-up">
        <h2>Quick Stats You Should Know</h2>
        <ul className="facts-list">
          <li>📚 Usually takes 1.5 to 2 years to complete</li>
          <li>🌐 Recognized and valued in most countries</li>
          <li>🚀 Can boost your job chances by around 30–40%</li>
          <li>💰 Often leads to higher salaries (sometimes a big jump!)</li>
        </ul>
      </section>


      <section id="benefits" className="md-section slide-in-left">
        <h2>Why Even Go for It?</h2>
        <p>
          Great question. A Master’s can open doors to research roles, top companies, teaching gigs, and even entrepreneurship. More than that, it shows you’re serious, curious, and ready to level up.
        </p>
        <p>
          Plus, you'll meet like-minded people and professors who challenge how you think. It's not just about career — it’s about growth.
        </p>
      </section>


      <section id="contact" className="md-section fade-in-right">
        <h2>Let’s Chat!</h2>
        <p>
          Not sure which path to take? Talk to our academic guides — real humans who’ve been through it and are here to help.
        </p>
        <button className="contact-btn">Talk to Us</button>
      </section>


      <footer className="md-footer">
        <p>© 2025 EduSity Master’s Hub. Built with care (and late-night snacks).</p>
      </footer>
    </div>
  );
}

export default MasterDegree;
