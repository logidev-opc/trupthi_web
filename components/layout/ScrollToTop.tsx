"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
      {/* Quick Phone Call Button */}
      <a
        href={`tel:${siteConfig.contact.rawPhone}`}
        aria-label="Call TRUPTHI Restaurant"
        className="w-10 h-10 rounded-full bg-[#246B32] text-white shadow-lg flex items-center justify-center hover:bg-[#123D22] transition-transform duration-200 hover:scale-110 active:scale-95 border border-[#5B963C]/30"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        type="button"
        className="w-10 h-10 rounded-full bg-[#123D22] text-[#F8F7EE] shadow-lg flex items-center justify-center hover:bg-[#246B32] transition-transform duration-200 hover:scale-110 active:scale-95 border border-white/15 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
