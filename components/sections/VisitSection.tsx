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

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Q9H3+963 Petrol Bunk, Yendada, Endada, Visakhapatnam, Andhra Pradesh 530045")}`;

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
                      Our Location
                    </h3>
                    <p className="text-xs text-[#F8F7EE] leading-relaxed">
                      {restaurantData.addressPlaceholder}
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#5B963C]/30 bg-[#0C2214] flex flex-col items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5B963C_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="w-16 h-16 rounded-full bg-[#246B32]/40 border border-[#5B963C]/60 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg shadow-[#246B32]/30">
                  <MapPin className="w-8 h-8 text-[#C59A45] animate-bounce" />
                </div>

                <h3 className="text-lg font-bold text-white font-serif mb-1">
                  TRUPTHI (తృప్తి)
                </h3>
                <p className="text-xs text-[#D8CBB8] max-w-xs mb-4">
                  Q9H3+963 Petrol Bunk, Yendada, Endada, Visakhapatnam
                </p>


                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#246B32] hover:bg-[#5B963C] text-white transition-colors shadow border border-[#5B963C]/40"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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

