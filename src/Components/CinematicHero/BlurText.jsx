import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * BlurText — word-by-word blur-in reveal animation.
 * Uses IntersectionObserver to trigger and Framer Motion for per-word animation.
 */

const BlurText = ({ text, className = '' }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible
              ? {
                  opacity: [0, 0.5, 1],
                  y: [20, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.3,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
