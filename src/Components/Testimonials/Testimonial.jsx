import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import './Testimonial.css';

import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const testimonials = [
  {
    img: user_1,
    name: 'William Jackson',
    location: 'Edusity, India',
    text: 'EduSity made complex topics feel simple. The interactive quizzes and visuals really helped me understand concepts I used to struggle with.'
  },
  {
    img: user_2,
    name: 'Sara Lee',
    location: 'Edusity, USA',
    text: 'The clean design and personalized dashboard kept me focused and motivated. EduSity is not just a tool – it’s my companion for growth.'
  },
  {
    img: user_3,
    name: 'Arjun Mehta',
    location: 'Edusity, India',
    text: "I love how the lessons are clear and interactive. I improved my grades in weeks. EduSity boosted my confidence big time."
  },
  {
    img: user_4,
    name: 'Fatima Sheikh',
    location: 'Edusity, UAE',
    text: 'Being a self-learner, I needed a platform that didn’t feel like school. EduSity gave me flexibility, fun, and results.'
  }
];

const Testimonial = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (container) {
        scrollAmount += 1;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
    };

    let interval = setInterval(scroll, 20); 

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      interval = setInterval(scroll, 20);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Element name="Testimonials" className="testimonial-section">
      <div className="testimonial-header">

      </div>
      <div className="testimonial-marquee" ref={scrollRef}>
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.img} alt={t.name} className="testimonial-img" />
              <h3>{t.name}</h3>
              <span>{t.location}</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Testimonial;
