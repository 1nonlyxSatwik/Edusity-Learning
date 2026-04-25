import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Herosection/Hero';
import TrustBar from './Components/TrustBar/TrustBar';
import Programs from './Components/Programs/Programs';
import WhyChooseUs from './Components/AboutUs/AboutUs';
import Features from './Components/Features/Features';
import Statistics from './Components/Statistics/Statistics';
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';

const CTA = () => (
  <section className="cta-section">
    <div className="container">
      <div className="cta-card glass reveal">
        <h2 className="text-gradient">Ready to Transform Your Career?</h2>
        <p>Join over 50,000 students learning world-class skills today.</p>
        <div className="cta-btns">
          <button className="btn-primary">Get Started Now</button>
          <button className="btn-secondary">Schedule a Call</button>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <TrustBar />
      <div className="main-content">
        <Programs />
        <WhyChooseUs />
        <Features />
        <Statistics />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default App;
