import React from 'react';
import './Programs.css';
import { HiAcademicCap, HiCode, HiGlobeAlt, HiPresentationChartBar } from "react-icons/hi";

const Programs = () => {
  const programs = [
    {
      icon: <HiAcademicCap />,
      title: "Academic Excellence",
      desc: "Curated curriculum designed by industry experts to ensure foundational mastery."
    },
    {
      icon: <HiCode />,
      title: "Technical Mastery",
      desc: "Hands-on projects and coding bootcamps to prepare you for the tech landscape."
    },
    {
      icon: <HiGlobeAlt />,
      title: "Global Perspective",
      desc: "International exchange programs and cross-cultural learning experiences."
    },
    {
      icon: <HiPresentationChartBar />,
      title: "Career Growth",
      desc: "Placement support and mentorship to bridge the gap between learning and earning."
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="text-gradient">World-Class Programs</h2>
          <p>Explore our diverse range of programs tailored to your professional goals.</p>
        </div>
        <div className="program-grid">
          {programs.map((p, index) => (
            <div className="program-card glass reveal" key={index}>
              <div className="program-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href="#" className="learn-more">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
