"use client";

import React from "react";

export default function ThankYouSection() {
  return (
    <>
      <section className="thankyou-section" id="thankYouSection">
        <div className="thankyou-container">
          <div className="thankyou-card-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/tq-DoE2cUgm.png"
              alt="Thank You Card"
              className="thankyou-img"
            />
            <div className="thankyou-card-text">
              <span className="ty-main">Thank You</span>
              <span className="ty-sub">For your blessings &amp; love</span>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="site-footer">
        <a
          href="https://www.instagram.com/awesome__creation/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-insta-link"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>@awesome__creation</span>
        </a>
        <p className="footer-sub">Connect For Your Digital Invitation</p>
      </footer> */}
    </>
  );
}
