import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const stats = [
    { label: "Students Enrolled", value: "50k+" },
    { label: "Job Placements", value: "92%" },
    { label: "Partner Universities", value: "120+" },
    { label: "Course Rating", value: "4.9/5" }
  ];

  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item reveal" key={i}>
            <div className="stat-value text-gradient">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
