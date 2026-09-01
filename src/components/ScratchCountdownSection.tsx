"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";
import { CardSimIcon } from "lucide-react";
import { CARD_INFO } from "@/utils/constant";
import moment from "moment";

interface HeartItem {
  id: string;
  text: string;
  isLong?: boolean;
}

const hearts: HeartItem[] = [
  { id: "heart-1", text: moment(CARD_INFO.nikahDate).format("DD") },
  {
    id: "heart-2",
    text: moment(CARD_INFO.nikahDate).format("MMMM"),
    isLong: true,
  },
  { id: "heart-3", text: moment(CARD_INFO.nikahDate).format("YYYY") },
];

export default function ScratchCountdownSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const canvasRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});
  const isDrawing = useRef<{ [key: string]: boolean }>({});
  const scratchedPixels = useRef<{ [key: string]: number }>({});

  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#e5a0ae", "#ff758c", "#ffd700", "#ffffff"],
      });
    } catch {
      // ignore
    }
  }, []);

  const revealAll = useCallback(() => {
    setIsRevealed(true);
    hearts.forEach((h) => {
      const canvas = canvasRefs.current[h.id];
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.style.display = "none";
      }
    });
    triggerConfetti();
  }, [triggerConfetti]);

  // Initialize Canvas scratch overlays
  useEffect(() => {
    hearts.forEach((h) => {
      const canvas = canvasRefs.current[h.id];
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (rect.width || 115) * dpr;
      canvas.height = (rect.height || 115) * dpr;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);

      // Create shimmering gold/silver gradient for scratch surface
      const gradient = ctx.createLinearGradient(
        0,
        0,
        rect.width || 115,
        rect.height || 115,
      );
      gradient.addColorStop(0, "#c7a365");
      gradient.addColorStop(0.3, "#ebd49d");
      gradient.addColorStop(0.5, "#fff6d6");
      gradient.addColorStop(0.7, "#d4af37");
      gradient.addColorStop(1, "#997a38");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width || 115, rect.height || 115);

      // Draw subtle scratch hint text or icon
      ctx.fillStyle = "rgba(100, 70, 20, 0.45)";
      ctx.font = "bold 12px Montserrat, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "SCRATCH",
        (rect.width || 115) / 2,
        (rect.height || 115) / 2,
      );
    });
  }, []);

  const scratch = (id: string, clientX: number, clientY: number) => {
    const canvas = canvasRefs.current[id];
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2, false);
    ctx.fill();

    scratchedPixels.current[id] = (scratchedPixels.current[id] || 0) + 1;
    if (scratchedPixels.current[id] > 28 && !isRevealed) {
      revealAll();
    }
  };

  useEffect(() => {
    const targetDate = new Date(CARD_INFO.nikahDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="scratch-section" id="scratchSection">
      <div className="scratch-bg-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="scratch-bg-image scratch-bg-video"
          poster="/assets/bg-CjJQzhxh.jpg"
        >
          <source src="/assets/weds2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-vignette" />
      </div>

      {/* SVG Heart Clip definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5, 0.85 C 0.5, 0.85 0.08, 0.58 0.02, 0.35 C -0.05, 0.12 0.12, 0.0 0.32, 0.0 C 0.43, 0.0 0.48, 0.07 0.5, 0.14 C 0.52, 0.07 0.57, 0.0 0.68, 0.0 C 0.88, 0.0 1.05, 0.12 0.98, 0.35 C 0.92, 0.58 0.5, 0.85 0.5, 0.85 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="scratch-content">
        <div className="reveal-btn-container">
          <button
            type="button"
            className="premium-reveal-btn"
            onClick={revealAll}
            disabled={isRevealed}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              className="iconify iconify--solar btn-icon"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M10.0802 7.89712C11.1568 5.96571 11.6952 5 12.5 5C13.3048 5 13.8432 5.96571 14.9198 7.89712L15.1984 8.3968C15.5043 8.94564 15.6573 9.22007 15.8958 9.40114C16.1343 9.5822 16.4314 9.64942 17.0255 9.78384L17.5664 9.90622C19.6571 10.3793 20.7025 10.6158 20.9512 11.4156C21.1999 12.2153 20.4872 13.0487 19.0619 14.7154L18.6932 15.1466C18.2881 15.6203 18.0856 15.8571 17.9945 16.1501C17.9034 16.443 17.934 16.759 17.9953 17.3909L18.051 17.9662C18.2665 20.19 18.3742 21.3019 17.7231 21.7962C17.072 22.2905 16.0932 21.8398 14.1357 20.9385L13.6292 20.7053C13.073 20.4492 12.7948 20.3211 12.5 20.3211C12.2052 20.3211 11.927 20.4492 11.3708 20.7053L10.8643 20.9385C8.90677 21.8398 7.928 22.2905 7.27688 21.7962C6.62575 21.3019 6.7335 20.19 6.94899 17.9662L7.00474 17.3909C7.06597 16.759 7.09659 16.443 7.00548 16.1501C6.91438 15.8571 6.71186 15.6203 6.30683 15.1466L5.93808 14.7154C4.51276 13.0487 3.8001 12.2153 4.04881 11.4156C4.29751 10.6158 5.34288 10.3793 7.43361 9.90622L7.9745 9.78384C8.56862 9.64942 8.86568 9.5822 9.1042 9.40114C9.34272 9.22007 9.4957 8.94565 9.80165 8.3968L10.0802 7.89712Z"></path>
                <path
                  d="M4.86752 2.50058C4.89751 2.3948 5.08528 2.39416 5.11598 2.49974C5.25618 2.98185 5.51616 3.69447 5.90928 4.08495C6.30241 4.47543 7.01676 4.73058 7.49981 4.86752C7.6056 4.89751 7.60623 5.08528 7.50065 5.11598C7.01854 5.25618 6.30592 5.51616 5.91545 5.90928C5.52497 6.30241 5.26981 7.01676 5.13287 7.49981C5.10288 7.6056 4.91511 7.60623 4.88441 7.50065C4.74421 7.01854 4.48424 6.30592 4.09111 5.91545C3.69798 5.52497 2.98363 5.26981 2.50058 5.13287C2.3948 5.10288 2.39416 4.91511 2.49974 4.88441C2.98185 4.74421 3.69447 4.48424 4.08495 4.09111C4.47543 3.69798 4.73058 2.98363 4.86752 2.50058Z"
                  opacity=".5"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M19 3.25C19.4142 3.25 19.75 3.58579 19.75 4V4.25H20C20.4142 4.25 20.75 4.58579 20.75 5C20.75 5.41421 20.4142 5.75 20 5.75H19.75V6C19.75 6.41421 19.4142 6.75 19 6.75C18.5858 6.75 18.25 6.41421 18.25 6V5.75H18C17.5858 5.75 17.25 5.41421 17.25 5C17.25 4.58579 17.5858 4.25 18 4.25H18.25V4C18.25 3.58579 18.5858 3.25 19 3.25Z"
                  clipRule="evenodd"
                  opacity=".5"
                ></path>
              </g>
            </svg>
            <span>{isRevealed ? "Date Revealed" : "Reveal Date"}</span>
          </button>
        </div>

        <div className="discover-text">Scratch to discover the date</div>

        <div className="heart-scratch-container">
          {hearts.map((h) => (
            <div key={h.id} className="heart-scratch-card">
              <div className="heart-border">
                <div className="heart-shape">
                  <span
                    className={`scratch-date ${h.isLong ? "long-title" : ""}`}
                  >
                    {h.text}
                  </span>
                  <canvas
                    ref={(el) => {
                      canvasRefs.current[h.id] = el;
                    }}
                    className="heart-canvas"
                    onPointerDown={(e) => {
                      isDrawing.current[h.id] = true;
                      scratch(h.id, e.clientX, e.clientY);
                    }}
                    onPointerMove={(e) => {
                      if (isDrawing.current[h.id]) {
                        scratch(h.id, e.clientX, e.clientY);
                      }
                    }}
                    onPointerUp={() => {
                      isDrawing.current[h.id] = false;
                    }}
                    onPointerLeave={() => {
                      isDrawing.current[h.id] = false;
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Revealed Countdown Section */}
        <div className={`hidden-countdown ${isRevealed ? "show" : ""}`}>
          <div className="save-the-date-label">Save the date</div>
          <div className="wedding-date-highlight">{`${moment(CARD_INFO.nikahDate).format("DD.MM.YYYY")}`}</div>

          <div className="timer-container">
            <div className="time-block">
              <span className="time-number">{timeLeft.days}</span>
              <p className="time-label">Days</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.hours}</span>
              <p className="time-label">Hours</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.minutes}</span>
              <p className="time-label">Minutes</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.seconds}</span>
              <p className="time-label">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
