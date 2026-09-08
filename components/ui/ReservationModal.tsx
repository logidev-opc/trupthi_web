"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Users, Clock, MessageSquare, Phone, Sparkles, Check } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("4");
  const [date, setDate] = useState("");
  const [session, setSession] = useState("Lunch Bhojanam (12:00 PM – 3:30 PM)");
  const [notes, setNotes] = useState("");
  const [dietary, setDietary] = useState("Pure Vegetarian (Standard)");
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleWhatsAppReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = siteConfig.contact.phone.replace(/[^0-9]/g, "");
    const message = encodeURIComponent(
      `*TRUPTHI Restaurant Table Reservation*\n\n` +
      `*Name:* ${name || "Guest"}\n` +
      `*Contact:* ${phone || "Not specified"}\n` +
      `*Date:* ${date || "Upcoming"}\n` +
      `*Session:* ${session}\n` +
      `*Guests:* ${guests} Persons\n` +
      `*Dietary:* ${dietary}\n` +
      (notes ? `*Special Requests:* ${notes}\n` : "") +
      `\nPlease confirm table availability. Thank you!`
    );

    const whatsappUrl = `https://wa.me/${cleanPhone.startsWith("91") ? cleanPhone : "91" + cleanPhone}?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-xl bg-[#FAF7F0] border border-[#C59A45]/30 rounded-3xl shadow-2xl overflow-hidden text-[#172117]">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#172117] via-[#246B32] to-[#172117] px-6 sm:px-8 py-6 text-white relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59A45]/20 border border-[#C59A45]/40 text-[#FAF7F0] text-[11px] font-bold tracking-widest uppercase mb-2">
            <Sparkles className="w-3 h-3 text-[#C59A45]" />
            <span>Traditional Hospitality</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7F0]">
            Reserve Your Feast Table
          </h3>
          <p className="text-xs sm:text-sm text-[#FAF7F0]/80 mt-1">
            Experience authentic Godavari banana leaf bhojanam with your loved ones.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#246B32]/10 border border-[#246B32]/30 text-[#246B32] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#172117]">
                Reservation Request Forwarded!
              </h4>
              <p className="text-sm text-[#4D574B] max-w-md mx-auto">
                Your booking details have been opened in WhatsApp. Our host desk will reply immediately to confirm your table.
              </p>
              <div className="pt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full border border-[#246B32] text-[#246B32] text-xs font-bold hover:bg-[#246B32]/10 transition-colors"
                >
                  Edit Details
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#246B32] text-white text-xs font-bold hover:bg-[#1B5226] transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppReservation} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Srinivas Rao"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1 text-[#C59A45]" />
                    Dining Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                    <Users className="w-3.5 h-3.5 inline mr-1 text-[#C59A45]" />
                    Number of Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                  >
                    <option value="1">1 Person (Solo Dining)</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons (Family Table)</option>
                    <option value="6">6 Persons</option>
                    <option value="8">8 Persons</option>
                    <option value="10">10 Persons</option>
                    <option value="15+">15+ Persons (Large Gathering)</option>
                  </select>
                </div>
              </div>

              {/* Dining Session */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                  <Clock className="w-3.5 h-3.5 inline mr-1 text-[#C59A45]" />
                  Dining Session
                </label>
                <select
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                >
                  <option value="Morning Tiffins (8:00 AM – 11:00 AM)">
                    Morning Heritage Tiffins (8:00 AM – 11:00 AM)
                  </option>
                  <option value="Lunch Bhojanam (12:00 PM – 3:30 PM)">
                    Afternoon Lunch Bhojanam (12:00 PM – 3:30 PM)
                  </option>
                  <option value="Evening Tiffins & Dinner (7:00 PM – 11:00 PM)">
                    Evening Tiffins & Dinner (7:00 PM – 11:00 PM)
                  </option>
                </select>
              </div>

              {/* Dietary Requirement */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                  Dietary Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "Pure Vegetarian (Standard)",
                    "Jain (No Onion/Garlic)",
                    "Satvik Meal",
                    "Vegan Friendly",
                  ].map((diet) => (
                    <button
                      key={diet}
                      type="button"
                      onClick={() => setDietary(diet)}
                      className={`p-2 rounded-lg border text-left font-medium transition-all ${
                        dietary === diet
                          ? "bg-[#246B32] text-white border-[#246B32]"
                          : "bg-white text-[#4D574B] border-[#246B32]/15 hover:border-[#246B32]/40"
                      }`}
                    >
                      {diet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D574B] mb-1.5">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday celebration, anniversary, high chair required..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#246B32]/20 bg-white text-sm focus:outline-none focus:border-[#246B32] focus:ring-1 focus:ring-[#246B32]"
                />
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#246B32] hover:bg-[#1B5226] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#246B32]/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#C59A45]" />
                  <span>Send Instant Booking on WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#8A6245]">
                  <span>Or call host desk directly:</span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="font-bold text-[#246B32] hover:underline inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
