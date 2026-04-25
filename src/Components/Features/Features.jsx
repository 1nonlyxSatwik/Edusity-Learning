import React from 'react';
import './Features.css';
import { HiOutlineLightBulb, HiOutlineSparkles, HiOutlineDeviceMobile, HiOutlineCloudUpload } from "react-icons/hi";

const Features = () => {
  const features = [
    {
      icon: <HiOutlineLightBulb />,
      title: "Smart Insights",
      desc: "AI-driven analytics to track your learning progress and identify areas for improvement."
    },
    {
      icon: <HiOutlineSparkles />,
      title: "Interactive Labs",
      desc: "Hands-on virtual environments to practice your skills in real-world scenarios."
    },
    {
      icon: <HiOutlineDeviceMobile />,
      title: "Mobile Ready",
      desc: "Learn on the go with our fully responsive platform and dedicated mobile app."
    },
    {
      icon: <HiOutlineCloudUpload />,
      title: "Cloud Sync",
      desc: "Your progress is automatically synced across all your devices in real-time."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="text-gradient">Advanced Features</h2>
          <p>Cutting-edge tools designed to accelerate your growth.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card reveal" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-info">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
