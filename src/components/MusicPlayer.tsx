'use client';

import React from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      className={`music-toggle ${isPlaying ? 'playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
      title={isPlaying ? 'Pause Music' : 'Play Music'}
    >
      {isPlaying ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" fill="#ffffff" />
          <circle cx="18" cy="16" r="3" fill="#ffffff" />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M9 9v9" />
          <path d="M15 15v-6l6-1v6" />
          <circle cx="6" cy="18" r="3" fill="#ffffff" />
          <circle cx="18" cy="16" r="3" fill="#ffffff" />
        </svg>
      )}
    </button>
  );
}
