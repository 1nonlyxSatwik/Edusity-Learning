import React, { useRef, useEffect, useCallback } from 'react';

/**
 * FadingVideo — rAF-driven crossfade video component.
 * Manually loops video with a fade-out before end and fade-in on restart.
 * No CSS transitions — all opacity changes driven by requestAnimationFrame.
 */

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds before video end to start fade-out

const FadingVideo = ({ src, className, style }) => {
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);
  const fadingOutRef = useRef(false);

  /**
   * Smoothly animate opacity from current value to target over `duration` ms.
   * Cancels any in-flight animation before starting a new one.
   */
  const fadeTo = useCallback((target, duration = FADE_MS) => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const video = videoRef.current;
    if (!video) return;

    const start = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      video.style.opacity = start + (target - start) * progress;

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(step);
      }
    };

    rafIdRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (
        !fadingOutRef.current &&
        video.duration - video.currentTime <= FADE_OUT_LEAD &&
        video.duration - video.currentTime > 0
      ) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [fadeTo]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
};

export default FadingVideo;
