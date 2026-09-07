"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function Preloader() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
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

    // Safety timeout: automatically exit after 4.2 seconds regardless
    const maxTimer = setTimeout(() => {
      handleFinish();
    }, 4200);

    return () => {
      clearTimeout(maxTimer);
    };
  }, [handleFinish]);

  // Track video progress and stop strictly at 4.0 seconds
  const handleTimeUpdate = () => {
    if (!videoRef.current || finishedRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const TARGET_DURATION = 4.0; // Strictly 4 seconds

    // Update progress bar (0 to 100%)
    const pct = Math.min(100, Math.max(0, (currentTime / TARGET_DURATION) * 100));
    setProgress(pct);

    if (currentTime >= TARGET_DURATION) {
      handleFinish();
    }
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
        src="/images/website-reveal.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoReady(true)}
        onPlaying={() => setIsVideoReady(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="/images/website-reveal.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Bottom Controls: Live Progress & Skip Button */}
      <div className="absolute bottom-6 left-0 right-0 px-6 sm:px-12 flex items-center justify-between z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#5B963C] animate-pulse" />
          <span className="text-xs tracking-wider uppercase text-white/80 font-medium font-sans drop-shadow-md">
            TRUPTHI Experience
          </span>
        </div>

        {/* 4-second Progress Track */}
        <div className="hidden sm:block flex-1 max-w-xs mx-8 h-[3px] bg-white/20 backdrop-blur-sm rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#5B963C] via-[#C59A45] to-[#E2BE6C] transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip Button */}
        <button
          onClick={handleFinish}
          className="text-xs uppercase tracking-wider text-white/90 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full transition-all duration-200 border border-white/20 flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
        >
          <span>Skip</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
