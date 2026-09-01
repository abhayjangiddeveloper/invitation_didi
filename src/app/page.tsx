"use client";

import DetailsSection from "@/components/DetailsSection";
import EventsSection from "@/components/EventsSection";
import HeartClickEffect from "@/components/HeartClickEffect";
import HeroSection from "@/components/HeroSection";
import IntroOverlay from "@/components/IntroOverlay";
import MusicPlayer from "@/components/MusicPlayer";
import RSVPSection from "@/components/RSVPSection";
import ScratchCountdownSection from "@/components/ScratchCountdownSection";
import ThankYouSection from "@/components/ThankYouSection";
import { useEffect, useRef, useState } from "react";

export default function WeddingInvitationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create background audio instance
    const audio = new Audio("/media/music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;
    // audio.volume = 0.3;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleOpen = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio auto-play prevented:", err);
        });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback error:", err);
        });
    }
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Intro Curtain Overlay */}
      <IntroOverlay isOpen={isOpened} onOpen={handleOpen} />

      {/* Floating Interactive Hearts on Click */}
      <HeartClickEffect />

      {/* Floating Audio Controller */}
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

      {/* Sections */}
      <HeroSection isOpen={isOpened} />
      <DetailsSection />
      <ScratchCountdownSection />
      <EventsSection />
      <div className="flowerSection">
        <RSVPSection />
        {/* <ComplimentsSection /> */}
        <ThankYouSection />
      </div>
    </main>
  );
}
