import React from 'react';
import './postgraduation.css';

const PostGraduation = () => {
  return (
    <div className="pg-container">
      {/* Hero Section */}
      <header className="pg-hero">
        <h1>Advance Your Career with Post Graduation</h1>
        <p>Unlock new opportunities with our comprehensive Post Graduation programs designed for ambitious learners.</p>
        <button className="apply-btn" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
          Apply Now
        </button>
      </header>

      {/* Why Choose Post Graduation */}
      <section className="pg-section fade-in">
        <h2>Why Choose Post Graduation?</h2>
        <div className="pg-grid">
          <article className="pg-card">
            <h3>Deepen Expertise</h3>
            <p>Master your field with advanced coursework and research opportunities.</p>
          </article>
          <article className="pg-card">
            <h3>Career Advancement</h3>
            <p>Increase your earning potential and open doors to senior roles.</p>
          </article>
          <article className="pg-card">
            <h3>Flexible Learning</h3>
            <p>Choose full-time, part-time, or online modes to suit your schedule.</p>
          </article>
          <article className="pg-card">
            <h3>Network & Collaborate</h3>
            <p>Connect with professionals and academics to grow your opportunities.</p>
          </article>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="pg-section pg-programs fade-in">
        <h2>Popular Post Graduation Programs</h2>
        <ul>
          <li>Master of Computer Applications (MCA)</li>
          <li>Master of Business Administration (MBA)</li>
          <li>Master of Science (M.Sc) in Data Science</li>
          <li>Master of Engineering (M.Eng) in Artificial Intelligence</li>
          <li>Master of Arts (M.A) in Psychology</li>
          <li>Master of Finance and Control (MFC)</li>
          <li>Master of Public Health (MPH)</li>
        </ul>
      </section>

      {/* Application & FAQs */}
      <section className="pg-section fade-in">
        <h2>How to Apply</h2>
        <ol>
          <li>Explore available programs and eligibility criteria.</li>
          <li>Prepare necessary documents (transcripts, ID, etc.).</li>
          <li>Fill out the online application form.</li>
          <li>Submit your application and await confirmation.</li>
          <li>Attend orientation and start your journey!</li>
        </ol>

        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <details>
            <summary>What is the duration of Post Graduation courses?</summary>
            <p>Most programs last 1-2 years depending on the specialization and mode of study.</p>
          </details>
          <details>
            <summary>Are scholarships available?</summary>
            <p>Yes, we offer merit-based and need-based scholarships for eligible students.</p>
          </details>
          <details>
            <summary>Can I study online?</summary>
            <p>Many of our programs offer flexible online learning options to accommodate working professionals.</p>
          </details>
          <details>
            <summary>What career support is provided?</summary>
            <p>We have a dedicated career services team to assist with job placement and internships.</p>
          </details>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="pg-footer">
        <h3>Ready to take the next step?</h3>
        <button className="apply-btn" onClick={() => alert('Redirect to application portal')}>
          Apply Now
        </button>
      </footer>
    </div>
  );
};

export default PostGraduation;
