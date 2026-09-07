"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, UtensilsCrossed, Clock, Sprout } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { mainNavLinks } from "@/config/navigation";
import { restaurantData } from "@/data/restaurant";
import { NavLink } from "@/types/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Trigger top route loading animation on path change safely
  useEffect(() => {
    const timerStart = setTimeout(() => setIsNavigating(true), 10);
    const timerEnd = setTimeout(() => setIsNavigating(false), 450);
    return () => {
      clearTimeout(timerStart);
      clearTimeout(timerEnd);
    };
  }, [pathname]);

  // ScrollSpy to track active section dynamically on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 20);

      if (isHomePage) {
        const sections = mainNavLinks.map((l) => l.sectionId);
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    if (isHomePage) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      setActiveSection(link.sectionId);

      const target = document.getElementById(link.sectionId);
      if (target) {
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: link.sectionId === "hero" ? 0 : offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#F8F7EE]/95 backdrop-blur-md border-b border-[#246B32]/15 ${
        isScrolled ? "py-2 shadow-md bg-[#F8F7EE]/98" : "py-3 shadow-xs"
      }`}
    >
      {/* Top glowing route navigation bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#5B963C] via-[#C59A45] to-[#246B32] transition-all duration-400 ease-out z-50 pointer-events-none ${
          isNavigating ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{ transformOrigin: "left" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo (Always visible on Left) */}
        <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
          <BrandLogo variant="header" />
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Main Navigation"
        >
          {mainNavLinks.map((link) => {
            const isActive = isHomePage
              ? activeSection === link.sectionId
              : pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out relative inline-flex items-center justify-center transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer select-none ${
                  isActive
                    ? "text-[#246B32] font-semibold bg-[#EBF4E8] shadow-xs"
                    : "text-[#172117] hover:text-[#246B32] hover:bg-[#EBF4E8]/70"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#246B32] rounded-full animate-nav-underline shadow-xs" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action: Explore Menu CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/menu"
            onClick={(e) => {
              if (isHomePage) {
                const menuLink = mainNavLinks.find((l) => l.sectionId === "menu");
                if (menuLink) handleNavClick(e, menuLink);
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-md bg-[#246B32] hover:bg-[#123D22] text-[#F8F7EE] hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] border border-[#5B963C]/40 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#EBF4E8]" />
            <span>Explore Menu</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#246B32] transition-colors text-[#172117] hover:bg-[#EBF4E8]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-[#246B32]" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#123D22]/98 backdrop-blur-xl text-[#F8F7EE] z-40 flex flex-col justify-between p-6 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-[#5B963C]/30 overflow-y-auto">
          <div className="space-y-4 pt-2">
            <div className="text-center pb-3 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-[#5B963C] font-semibold flex items-center justify-center gap-1.5">
                <Sprout className="w-3.5 h-3.5" />
                TRUPTHI – తృప్తి
              </span>
              <p className="text-xs text-[#D8CBB8] mt-1 font-serif">
                {restaurantData.teluguSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {mainNavLinks.map((link) => {
                const isActive = isHomePage
                  ? activeSection === link.sectionId
                  : pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 border transform active:scale-[0.98] ${
                      isActive
                        ? "bg-[#246B32] text-white border-[#5B963C] shadow-sm font-semibold"
                        : "bg-white/5 hover:bg-[#246B32]/40 hover:text-white border-white/5"
                    }`}
                  >
                    <span className="text-base font-medium">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/menu"
                onClick={(e) => {
                  if (isHomePage) {
                    const menuLink = mainNavLinks.find(
                      (l) => l.sectionId === "menu"
                    );
                    if (menuLink) handleNavClick(e, menuLink);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-bold bg-[#246B32] hover:bg-[#5B963C] text-white shadow-lg active:scale-[0.98] transition-colors"
              >
                <UtensilsCrossed className="w-5 h-5" />
                <span>View Full Menu</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#D8CBB8] space-y-2">
            <div className="flex items-center gap-2 text-[#EBF4E8]">
              <Clock className="w-4 h-4 text-[#5B963C]" />
              <span>Timings: 07:00 AM – 10:30 PM Everyday</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#5B963C]" />
              <span>{restaurantData.phonePlaceholder}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
