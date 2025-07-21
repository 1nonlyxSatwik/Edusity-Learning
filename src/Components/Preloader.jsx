import React, { useEffect, useState } from 'react';
import './preloader.css';

const Preloader = () => {
  const fullText = "Loading content. Please wait...";
  const words = fullText.split(" ");
  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleWords((prev) => [...prev, words[index]]);
      index++;
      if (index === words.length) {
        clearInterval(interval);
      }
    }, 400); // adjust timing as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      <div className="animated-background">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
      <div className="spinner"></div>
      <p className="loading-text">
        {visibleWords.join(" ")}
      </p>
    </div>
  );
};

export default Preloader;
