import React from 'react';
import './Graduationdegree.css';

const GraduationDegree = () => {
  return (
    <div className="graduation-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">MyEduSite</div>
        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#courses">Courses</a>      
          <a href="#faculty">Faculty</a>
          <a href="#admissions">Admissions</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Unlock Your Future with Our Graduation Programs</h1>
          <p>Explore world-class education, expert faculty, and industry-relevant skills to build your dream career.</p>
          <a href="#courses" className="hero-btn">Explore Courses</a>
        </div>
      </header>

      {/* Overview */}
      <section id="overview" className="section fade-in">
        <h2>Why Choose Our Graduation Programs?</h2>
        <p>
          Our degrees are tailored for the future — combining academic excellence, industry partnerships, and a vibrant campus life. Get the support, tools, and mentorship you need to succeed in today’s competitive world.
        </p>
      </section>

      {/* Courses */}
      <section id="courses" className="section fade-in">
        <h2>Popular Courses</h2>
        <ul className="course-list">
          <li>🎓 B.Tech in Computer Science & Engineering</li>
          <li>📊 BBA in Business Analytics and Digital Marketing</li>
          <li>💼 B.Com in Finance, Accounting & Taxation</li>
          <li>🧠 B.Sc in Psychology and Cognitive Science</li>
          <li>🌱 B.Sc in Environmental Science</li>
          <li>🎨 BA in Visual Communication</li>
        </ul>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section fade-in">
        <h2>Meet Our Faculty</h2>
        <p>
          Learn from globally experienced mentors, PhD holders, and industry veterans who bring practical insights and academic depth to every class.
        </p>
        <p><strong>95% of faculty hold doctoral degrees.</strong> Our curriculum is regularly updated in collaboration with industry leaders.</p>
      </section>

      {/* Admissions */}
      <section id="admissions" className="section fade-in">
        <h2>Admissions & Eligibility</h2>
        <p>
          We welcome curious, driven learners from all backgrounds. Apply online, upload your documents, and join a vibrant community of learners.
        </p>
        <ul className="course-list">
          <li>📌 Minimum 60% in Class XII</li>
          <li>📌 English proficiency (IELTS/TOEFL optional)</li>
          <li>📌 Entrance Test or Interview based selection</li>
        </ul>
        <a href="/apply" className="hero-btn">Apply Now</a>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section fade-in">
        <h2>Student Success Stories</h2>
        <p>
          "MyEduSite changed my life! From top internships to global exchange opportunities, I found the support I needed." – <em>Riya Sharma, B.Tech CSE</em>
        </p>
        <p>
          "The faculty here are amazing. They mentored me through every challenge." – <em>Arjun Mehta, BBA</em>
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="section fade-in">
        <h2>Frequently Asked Questions</h2>
        <ul className="course-list">
          <li><strong>Q:</strong> Are online classes available?<br /><strong>A:</strong> Yes, we offer hybrid and online modes for select programs.</li>
          <li><strong>Q:</strong> Is placement assistance provided?<br /><strong>A:</strong> Absolutely. We have a 92% placement record.</li>
          <li><strong>Q:</strong> What scholarships are available?<br /><strong>A:</strong> Need-based and merit scholarships up to 100%.</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="section fade-in">
        <h2>Contact Us</h2>
        <p>Got questions? Reach out to our admissions team.</p>
        <a href="/" className="contact-btn">Go to Home</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} MyEduSite. Crafted with ❤️ for future leaders.
      </footer>
    </div>
  );
};

export default GraduationDegree;
