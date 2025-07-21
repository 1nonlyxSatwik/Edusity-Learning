import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_icon__1 from '../../assets/program-icon-1.png';
import program_icon__2 from '../../assets/program-icon-2.png';
import program_icon__3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <section id="ourprogram" className="programs">
      <div className="programs-heading">
        <h2>What We Offer</h2>
        <p>Explore our diverse programs tailored to boost your academic journey.</p>
      </div>

      <div
        className="programs-wrapper"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}
      >
        {/* Graduation Degree */}
        <Link to="/graduation" className="program" style={{ textDecoration: 'none' }}>
          <div className="caption">
            <img src={program_icon__1} alt="Graduation Icon" />
            <p>Graduation Degree</p>
          </div>
          <img src={program_1} alt="Graduation Program" />
        </Link>

        {/* Master Degree */}
        <Link to="/masterdegree" className="program" style={{ textDecoration: 'none' }}>
          <div className="caption">
            <img src={program_icon__2} alt="Master Icon" />
            <p>Master Degree</p>
          </div>
          <img src={program_2} alt="Master Program" />
        </Link>

        {/* Post Graduation */}
        <Link to="/postgraduation" className="program" style={{ textDecoration: 'none' }}>
          <div className="caption">
            <img src={program_icon__3} alt="Post Graduation Icon" />
            <p>Post Graduation</p>
          </div>
          <img src={program_3} alt="Post Graduation Program" />
        </Link>
      </div>
    </section>
  );
};

export default Programs;
