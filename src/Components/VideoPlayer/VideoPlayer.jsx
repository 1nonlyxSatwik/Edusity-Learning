import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/video.mp4';

const VideoPlayer = () => {
  return (
    <section className="video-hero">
      <div className="video-overlay" />
      <video
        className="video-bg"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-content">
          <h1>Edusity – Ignite Your Learning Journey</h1>
        <p>
          EduSity is your one-stop platform for innovative educational tools, interactive quizzes, and personalized learning experiences. 
          Designed to empower students, we bring engaging content and cutting-edge resources to help you grow, learn, and succeed in a world full of opportunities.
        </p>
      </div>
    </section>
  );
};

export default VideoPlayer;
