"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";

const emptySubscribe = () => () => { };

export default function Preloader() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef<boolean>(false);

  const handleFinish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch {
        // ignore
      }
    }

    setIsFading(true);

    // After fade-out transition, unmount completely
    setTimeout(() => {
      setIsDone(true);
    }, 700);
  }, []);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      handleFinish();
      return;
    }

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoReady(true);
          })
          .catch(() => {
            setIsVideoReady(true);
          });
      }
    }

    // Fallback safety timeout (8 seconds max)
    const maxTimer = setTimeout(() => {
      handleFinish();
    }, 8000);

    return () => {
      clearTimeout(maxTimer);
    };
  }, [handleFinish]);

  const handleLoadedMetadata = () => {
    setIsVideoReady(true);
  };

  if (!isClient || isDone) return null;

  return (
    <aside
      aria-label="TRUPTHI Video Preloader"
      aria-hidden={isFading}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070E09] transition-opacity duration-700 ease-out select-none overflow-hidden ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Fullscreen Video Reveal */}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/djaaoxrv9/video/upload/v1789110142/same_elanye_generate_chaiyu_ch_rdxu5s.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onLoadedData={() => setIsVideoReady(true)}
        onPlaying={() => setIsVideoReady(true)}
        onEnded={handleFinish}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="https://res.cloudinary.com/djaaoxrv9/video/upload/v1789110142/same_elanye_generate_chaiyu_ch_rdxu5s.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </aside>
  );
}
