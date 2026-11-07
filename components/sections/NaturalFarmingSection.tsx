"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Play,
  X,
  ExternalLink,
  Sparkles,
  Sprout,
  BookOpen,
  Leaf,
  GraduationCap,
} from "lucide-react";

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface FarmingVideo {
  id: string;
  videoId: string;
  episode: string;
  title: string;
  teluguTitle: string;
  source: string;
  category: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string;
}

const farmingVideos: FarmingVideo[] = [
  {
    id: "palekar-margadarshi",
    videoId: "-8slPbB_H7M",
    episode: "01",
    title: "Subhash Palekar | Margadarshi",
    teluguTitle: "సుభాష్ పాలేకర్ | మార్గదర్శి",
    source: "ETV Andhra Pradesh · Full Episode",
    category: "Natural Farming Wisdom",
    description:
      "A comprehensive exploration of natural cultivation, soil biology revitalization, and sustainable farming methods in Andhra Pradesh.",
    youtubeUrl: "https://www.youtube.com/watch?v=-8slPbB_H7M",
    thumbnailUrl: "https://img.youtube.com/vi/-8slPbB_H7M/hqdefault.jpg",
  },
  {
    id: "palekar-interview",
    videoId: "p7Ef1hWTmZI",
    episode: "02",
    title: "Subhash Palekar Interview | Natural Farming",
    teluguTitle: "సుభాష్ పాలేకర్ ఇంటర్వ్యూ | ప్రకృతి వ్యవసాయం",
    source: "hmtv Agri · Natural Farming",
    category: "Expert Dialogue",
    description:
      "In-depth dialogue highlighting self-reliant agricultural practices, organic nourishment, and eliminating toxic chemicals from food.",
    youtubeUrl: "https://www.youtube.com/watch?v=p7Ef1hWTmZI",
    thumbnailUrl: "https://img.youtube.com/vi/p7Ef1hWTmZI/hqdefault.jpg",
  },
  {
    id: "palekar-farm-tour",
    videoId: "DsN-wHfs7Y4",
    episode: "03",
    title: "Subhash Palekar Krishi – Farm Tour & Interview",
    teluguTitle: "విజయ్ రామ్ ఫార్మ్ టూర్ & ఇంటర్వ్యూ",
    source: "Vijay Ram Farm Tour & Interview · Anchor Geethanjali",
    category: "On-Field Experience",
    description:
      "An inspiring on-field tour of a flourishing natural farm showcasing polyculture, living topsoil health, and indigenous heritage crops.",
    youtubeUrl: "https://www.youtube.com/watch?v=DsN-wHfs7Y4",
    thumbnailUrl: "https://img.youtube.com/vi/DsN-wHfs7Y4/hqdefault.jpg",
  },
];

const pillars = [
  {
    icon: Sprout,
    title: "Natural Farming",
    telugu: "ప్రకృతి వ్యవసాయం",
    desc: "Understanding nature-based agricultural practices and chemical-free soil revitalization.",
  },
  {
    icon: BookOpen,
    title: "Traditional Wisdom",
    telugu: "సనాతన విజ్ఞానం",
    desc: "Learning from timeless Indian farming knowledge, crop rotation, and indigenous seed preservation.",
  },
  {
    icon: Leaf,
    title: "Pure Nourishment",
    telugu: "స్వచ్ఛమైన ఆహారం",
    desc: "Connecting honest agriculture to authentic plate flavors that truly heal and sustain life.",
  },
];

export default function NaturalFarmingSection() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section
      id="natural-farming"
      className="py-20 lg:py-28 bg-[#F1EEDF] bg-natural-texture relative overflow-hidden scroll-mt-24 border-y border-[#246B32]/10"
    >
      {/* Decorative subtle ambient accents */}
      <div className="absolute -left-20 top-1/4 w-80 h-80 rounded-full bg-[#246B32]/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full bg-[#C59A45]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#246B32]/10 border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Knowledge • Nature • Tradition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] font-serif telugu-heading mb-2">
            ప్రకృతితో మన అనుబంధం
          </h2>

          <p className="text-xl sm:text-2xl text-[#246B32] font-serif english-heading italic mb-4">
            Wisdom of Natural Farming
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#246B32]" />
            <span className="text-[#246B32]">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#246B32]" />
          </div>

          <p className="text-sm sm:text-base text-[#4D574B] leading-relaxed">
            Discover the wisdom of traditional Indian farming, natural
            cultivation and sustainable food practices that inspire our journey.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#246B32]/15 hover:border-[#246B32]/35 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF4E8] border border-[#246B32]/20 flex items-center justify-center text-[#246B32] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-[#172117] font-serif">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#246B32] font-serif telugu-heading">
                    {item.telugu}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4D574B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Video Gallery Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#246B32]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#246B32] mb-1">
              <GraduationCap className="w-4 h-4 text-[#246B32]" />
              <span>Educational Inspiration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#172117]">
              Explore These Selected Videos
            </h3>
            <p className="text-xs sm:text-sm text-[#4D574B] mt-1">
              Inspiring educational talks and documentaries on natural farming
              pioneered by Padmashri Subhash Palekar.
            </p>
          </div>
          <div className="text-xs text-[#246B32] font-semibold bg-[#246B32]/10 px-3 py-1.5 rounded-full self-start sm:self-auto border border-[#246B32]/20">
            3 Curated Episodes
          </div>
        </div>

        {/* 3 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {farmingVideos.map((video) => {
            const isPlaying = activeVideoId === video.videoId;

            return (
              <div
                key={video.id}
                className="group rounded-2xl bg-white border border-[#246B32]/15 hover:border-[#246B32]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* 16:9 Video Thumbnail or Embed Player */}
                <div className="relative aspect-video w-full bg-[#172117] overflow-hidden">
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(null)}
                        aria-label="Close video player"
                        className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-black/85 text-white hover:bg-black hover:scale-105 transition-all flex items-center justify-center cursor-pointer shadow-md border border-white/20"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(video.videoId)}
                      aria-label={`Play ${video.title}`}
                      className="w-full h-full relative block text-left group cursor-pointer"
                    >
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:from-black/85 transition-colors duration-300" />

                      {/* Episode Badge at top left */}
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-xs border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
                        Part {video.episode}
                      </div>

                      {/* Category Badge at top right */}
                      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-[#246B32]/90 backdrop-blur-xs border border-[#5B963C]/30 text-[#F8F7EE] text-[10px] font-semibold">
                        {video.category}
                      </div>

                      {/* Centered YouTube Style Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E50914] group-hover:bg-[#FF0000] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                        </div>
                        <span className="text-[11px] font-semibold text-white/90 bg-black/60 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          Click to Watch
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Source / Channel */}
                    <div className="flex items-center gap-1.5 text-xs text-[#8A6245] font-semibold mb-2">
                      <YouTubeIcon className="w-4 h-4 text-[#E50914] shrink-0" />
                      <span className="truncate">{video.source}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-[#172117] font-serif leading-snug group-hover:text-[#246B32] transition-colors mb-1">
                      {video.title}
                    </h4>

                    {/* Telugu Title */}
                    <p className="text-xs sm:text-sm font-semibold text-[#246B32] font-serif telugu-heading mb-3">
                      {video.teluguTitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4D574B] leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 mt-6 border-t border-[#246B32]/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(video.videoId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#246B32] hover:text-[#123D22] transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isPlaying ? "Currently Playing" : "Watch Here"}</span>
                    </button>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#4D574B] hover:text-[#172117] transition-colors"
                      title="Open on YouTube"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Educational Context Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/70 border border-[#246B32]/15 text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#4D574B] leading-relaxed">
            <span className="font-bold text-[#246B32]">Educational Context: </span>
            These curated documentary videos and interviews feature the work of
            pioneering natural farming advocates and traditional agriculturalists.
            They serve as an educational and philosophical inspiration for
            TRUPTHI’s celebration of pure, chemical-free, and honest food.
          </p>
        </div>
      </div>
    </section>
  );
}
