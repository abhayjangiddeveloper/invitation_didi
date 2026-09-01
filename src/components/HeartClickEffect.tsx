'use client';

import React, { useEffect } from 'react';

export default function HeartClickEffect() {
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let y = 0;

      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        x = e.clientX;
        y = e.clientY;
      } else {
        return;
      }

      // Don't spawn if clicking interactive elements like buttons, canvas or links
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'CANVAS')) {
        return;
      }

      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${x - 7}px`;
      heart.style.top = `${y - 7}px`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1100);
    };

    window.addEventListener('click', handlePointerDown);
    return () => {
      window.removeEventListener('click', handlePointerDown);
    };
  }, []);

  return null;
}
