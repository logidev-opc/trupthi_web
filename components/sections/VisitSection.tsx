"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, CalendarDays, ExternalLink, Utensils, Sparkles, CheckCircle2 } from "lucide-react";
import { restaurantData } from "@/data/restaurant";
import { siteConfig } from "@/config/site";
import ReservationModal from "@/components/ui/ReservationModal";

export default function VisitSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps?q=${siteConfig.contact.geo.latitude},${siteConfig.contact.geo.longitude}`;

  return (
    <section id="visit" className="relative py-24 bg-[#122A1A] text-white overflow-hidden scroll-mt-24">
      {/* Background Ambience Photo with Deep Forest Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/restaurant-ambience.jpg"
          alt="TRUPTHI Restaurant Ambience"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2214]/95 via-[#0C2214]/90 to-[#0C2214]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact & Visit Details */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#5B963C]/30 text-[#A5D6A7] text-xs font-bold uppercase tracking-widest mb-4">
              <CalendarDays className="w-3.5 h-3.5 text-[#C59A45]" />
              <span>Dine With Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif english-heading mb-6">
              Come Taste the Tradition
            </h2>

            <p className="text-sm sm:text-base text-[#DCD5C4] leading-relaxed mb-8 max-w-xl">
              We warmly invite you and your family to savor wholesome Telugu vegetarian dining. Step in for steaming morning tiffins, authentic banana leaf feasts, and refreshing natural buttermilk.
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-[#5B963C]/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider mb-1">
                      Our Location & Landmark
                    </h3>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#C59A45]/20 text-[#F5D77F] text-[11px] font-semibold mb-1.5">
                      <span>Landmark: Beside HP Petrol Bunk (Dr. Raju Agencies)</span>
                    </div>
                    <p className="text-xs text-[#F8F7EE] leading-relaxed">
                      {restaurantData.addressPlaceholder}
                    </p>
                    <p className="text-[11px] text-[#A5D6A7] mt-1 font-medium">
                      Near GITAM University Road Junction
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-[#5B963C]/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider mb-1">
                      Phone / Inquiries
                    </h3>
                    <p className="text-xs text-[#F8F7EE] leading-relaxed">
                      {restaurantData.phonePlaceholder}
                    </p>
                    <p className="text-[11px] text-[#A5D6A7] mt-1 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#5B963C]" />
                      Table dining & takeaway
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-white/[0.06] border border-[#5B963C]/30 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#A5D6A7] shrink-0 mt-0.5" />
                  <div className="w-full">
                    <h3 className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider mb-1">
                      Service Timings
                    </h3>
                    <div className="space-y-1.5 text-xs text-[#F8F7EE]">
                      {restaurantData.openingHours.map((h, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-1">
                          <span className="font-semibold text-white">{h.days}:</span>
                          <span className="text-[#A5D6A7]">{h.timings}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#C59A45] hover:bg-[#B38838] text-[#172117] transition-all shadow-lg shadow-[#C59A45]/30 border border-[#C59A45] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#172117]" />
                <span>Reserve a Table</span>
              </button>

              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#246B32] hover:bg-[#5B963C] text-white transition-all shadow-md border border-[#5B963C]/40 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
              </Link>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#A5D6A7]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 bg-white/[0.06] border border-[#5B963C]/30 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#5B963C]" />
                  Restaurant Map Preview
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#246B32]/40 text-[#A5D6A7] font-semibold border border-[#5B963C]/30">
                  Yendada, Vizag
                </span>
              </div>

              {/* Map Canvas Visual Card */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#5B963C]/30 bg-[#0C2214] flex flex-col items-center justify-center p-4 sm:p-6 text-center group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5B963C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 cursor-pointer w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#246B32]/40 border border-[#5B963C]/60 flex items-center justify-center mb-2 hover:scale-110 transition-transform shadow-lg shadow-[#246B32]/30"
                  title="Open in Google Maps"
                >
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#C59A45] animate-bounce" />
                </a>

                <h3 className="text-lg sm:text-xl font-bold text-white font-serif mb-0.5">
                  TRUPTHI (తృప్తి)
                </h3>
                <p className="text-[11px] text-[#A5D6A7] font-serif telugu-heading mb-2">
                  స్వచ్ఛమైన తెలుగు శాకాహార భోజనశాల
                </p>

                {/* Structured Landmark & Location Details */}
                <div className="w-full max-w-sm bg-white/[0.06] backdrop-blur-xs rounded-xl p-2.5 sm:p-3 mb-3 border border-[#5B963C]/25 text-center">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C59A45]/20 border border-[#C59A45]/40 text-[#F5D77F] text-[10px] sm:text-[11px] font-bold mb-1">
                    <span>📍 Landmark: Beside HP Petrol Bunk (Dr. Raju Agencies)</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#F8F7EE] font-semibold leading-tight">
                    NH-16, Vivekananda Nagar, Yendada
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#A5D6A7] mt-0.5 font-medium">
                    Near GITAM University Road, Visakhapatnam – 530045
                  </p>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#246B32] hover:bg-[#5B963C] text-white transition-all shadow-md border border-[#5B963C]/40 hover:scale-105 active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#A5D6A7]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 text-center">
                <p className="text-[11px] text-[#A5D6A7]">
                  * Complimentary valet parking and wheelchair-friendly dining available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

