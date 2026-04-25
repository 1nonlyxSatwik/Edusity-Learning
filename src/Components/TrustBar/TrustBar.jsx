import React from 'react';
import './TrustBar.css';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaMeta } from 'react-icons/fa';

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="container">
        <p>Trusted by students joining from top companies</p>
        <div className="logo-strip">
          <FaGoogle />
          <FaAmazon />
          <FaMicrosoft />
          <FaApple />
          <FaMeta />
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
