import React, { useEffect, useState } from 'react';
import './Preloader.css';

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
    }, 400); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Preloader-container">
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
