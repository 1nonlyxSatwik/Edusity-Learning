import React from 'react';
import './Auth.css';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="mesh-bg"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="auth-card glass-card"
      >
        <div className="auth-header">
          <div className="brand-dot"></div>
          <h1>Welcome Back</h1>
          <p>Login to your EduSpark account</p>
        </div>

        <form className="auth-form">
          <div className="input-group">
            <HiOutlineMail />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-group">
            <HiOutlineLockClosed />
            <input type="password" placeholder="Password" />
          </div>
          <button className="btn-auth-submit">Sign In</button>
        </form>

        <div className="auth-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-auth">
          <button className="btn-social"><FaGoogle /> Google</button>
          <button className="btn-social"><FaGithub /> GitHub</button>
        </div>

        <p className="auth-footer">
          Don't have an account? <a href="#">Sign up for free</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
