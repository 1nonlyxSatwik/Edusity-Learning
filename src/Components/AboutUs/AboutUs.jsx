import React from 'react';
import './aboutus.css';
import aboutVideo from '../../assets/video.mp4'; // Make sure the video is present in assets

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-left">
        <video
          className="about-video"
          controls
          poster=""
        >
          <source src={aboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-right">
        <h3>About EduSity</h3>

        <p>
          EduSity started with a simple thought: Why does learning often feel like a chore? In a world where everything is fast and flashy, education was getting left behind. So, we decided to do something about it.
        </p>

        <p>
          We're not a big company. We're a small team—educators, designers, and developers who genuinely care. We wanted to build something fresh, fun, and focused on actual learning, not just grades.
        </p>

        <p>
          Our mission? To make learning exciting again. We want to create a space where students actually enjoy coming back—where curiosity wins over cramming.
        </p>

        <p>
          Our vision? To grow EduSity into a platform that feels like your personal learning coach. Always there, always evolving, and always focused on helping you get better at whatever you care about.
        </p>

        <p>
          We don’t believe in boring textbooks. So we’ve built interactive quizzes, clean visuals, and a smooth design that works on any device—even at 2 AM when you’re cramming or just curious.
        </p>

        <p>
          Less clutter, more clarity: No ads, no distractions—just a calm space to learn at your pace. Dark mode included.
        </p>

        <p>
          Tech meets teaching: Behind the scenes, we’re always tweaking things. Fixing bugs, adding new stuff, listening to what students say—and building a better place to learn.
        </p>

        <p>
          Whether you're prepping for exams, learning something new, or just exploring ideas, EduSity is for you. It's not perfect (yet!), but it's made with heart.
        </p>

        <p>
          Thanks for being here.<br />
          Let’s learn something awesome—together.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
