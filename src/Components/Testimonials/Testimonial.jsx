import React from 'react';
import './Testimonial.css';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';

const testimonials = [
  {
    img: user_1,
    name: 'William Jackson',
    role: 'Product Designer',
    text: 'EduSity transformed how I approach complex design problems. The clarity of content is unmatched in the industry.'
  },
  {
    img: user_2,
    name: 'Sara Lee',
    role: 'Software Engineer',
    text: 'The interactive modules helped me master React in record time. It feels less like a course and more like a mentor.'
  },
  {
    img: user_3,
    name: 'Arjun Mehta',
    role: 'Marketing Lead',
    text: 'A beautifully designed platform that actually delivers results. My team has seen a 40% increase in productivity.'
  }
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="text-gradient">Trusted by Thousands</h2>
          <p>Join a global community of learners who are redefining their careers.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card glass reveal" key={index}>
              <p className="quote">"{t.text}"</p>
              <div className="testimonial-user">
                <img src={t.img} alt={t.name} />
                <div className="user-info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
