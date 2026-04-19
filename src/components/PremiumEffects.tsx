"use client";

import React, { useEffect } from 'react';

export const PremiumEffects = () => {
  useEffect(() => {
    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.style.cssText = `position:fixed;width:8px;height:8px;
    background:#fff;border-radius:50%;pointer-events:none;z-index:99999;
    transition:transform 0.1s ease;mix-blend-mode:difference;`;
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 4 + 'px';
      cursor.style.top = e.clientY - 4 + 'px';
    };

    // Scroll Progress Bar
    const bar = document.createElement('div');
    bar.style.cssText = `position:fixed;top:0;left:0;height:2px;
    background:#fff;z-index:99998;transition:width 0.1s;width:0%;`;
    document.body.appendChild(bar);

    const handleScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      bar.style.width = (pct * 100) + '%';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
      document.body.removeChild(cursor);
      document.body.removeChild(bar);
    };
  }, []);

  return null;
};
