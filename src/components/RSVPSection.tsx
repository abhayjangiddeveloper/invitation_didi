'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function RSVPSection() {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleYes = () => {
    setResponse('yes');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#c43360', '#ff758c', '#ffd700', '#ffffff'],
      });
    } catch {
      // ignore
    }
  };

  const handleNo = () => {
    setResponse('no');
  };

  return (
    <section className="rsvp-section" id="rsvpSection">
      <h2 className="rsvp-title">Will You Join Our Big Day?</h2>
      <p className="rsvp-sub">Join us as we step into our forever</p>

      <div className="rsvp-buttons">
        <button
          type="button"
          className="rsvp-btn yes"
          onClick={handleYes}
        >
          I&apos;ll Be There ❤️
        </button>

        <button
          type="button"
          className="rsvp-btn no"
          onClick={handleNo}
        >
          Will Miss It 😔
        </button>
      </div>

      {response === 'yes' && (
        <p className="rsvp-message happy">
          Yay! Can&apos;t wait to celebrate with you 🎉
        </p>
      )}

      {response === 'no' && (
        <p className="rsvp-message sad">
          We&apos;ll miss you... but you&apos;ll be in our hearts ❤️
        </p>
      )}
    </section>
  );
}
