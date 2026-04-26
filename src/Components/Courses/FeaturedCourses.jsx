import React from 'react';
import './FeaturedCourses.css';
import { COURSES } from '../../constants/courses';
import { HiStar, HiOutlineClock, HiOutlineUsers } from 'react-icons/hi';
import { motion } from 'framer-motion';

const FeaturedCourses = () => {
  return (
    <section className="featured-courses section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="text-gradient">Accelerate Your AI Mastery</h2>
          <p>Hand-picked curriculum from industry leaders.</p>
        </div>
        
        <div className="courses-grid">
          {COURSES.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="course-card glass-card"
            >
              <div className="course-img-wrapper">
                <img src={course.image} alt={course.title} />
                <span className="course-category">{course.category}</span>
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <span className="rating"><HiStar /> {course.rating}</span>
                  <span className="level">{course.level}</span>
                </div>
                <h3>{course.title}</h3>
                <p className="mentor">by {course.mentor}</p>
                
                <div className="course-details">
                  <span><HiOutlineClock /> {course.duration}</span>
                  <span><HiOutlineUsers /> {course.students}</span>
                </div>
                
                <div className="course-footer">
                  <span className="price">{course.price}</span>
                  <button className="btn-enroll">Enroll Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
