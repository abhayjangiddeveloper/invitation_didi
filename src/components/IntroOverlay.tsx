"use client";

import React from "react";

interface IntroOverlayProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function IntroOverlay({ isOpen, onOpen }: IntroOverlayProps) {
  return (
    <div className={`curtain-overlay ${isOpen ? "opened" : ""}`}>
      <div className="curtain-bg" />
      <div className="curtain-center-btn" onClick={onOpen}>
        <div className="play-circle">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#ffffff", marginLeft: "3px" }}
          >
            <polygon points="5 3 19 12 5 21 5 3" fill="rgba(255,255,255,0.7)" />
          </svg>
        </div>
        <div className="curtain-tap-text">Open Invitation</div>
      </div>
    </div>
  );
}
