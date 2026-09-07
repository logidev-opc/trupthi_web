import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F1EEDF] relative overflow-hidden">
      {/* Background soft ambient ornament */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#246B32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <MessageSquareQuote className="w-4 h-4 text-[#C59A45]" />
            <span>Honored Patron Reflections</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172117] font-serif english-heading mb-4">
            Words of Appreciation
          </h2>

          <p className="text-base text-[#4D574B] max-w-xl mx-auto leading-relaxed">
            Heartfelt stories from food lovers, families, and regular patrons who cherish authentic South Indian dining.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-[#246B32]/15 hover:border-[#C59A45]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Highlight badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#C59A45]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#246B32] bg-[#EBF4E8] px-2.5 py-1 rounded-full border border-[#246B32]/20">
                    {t.highlight}
                  </span>
                </div>

                {/* English quote */}
                <p className="text-sm sm:text-base text-[#2A3528] leading-relaxed italic font-serif group-hover:text-[#172117] transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-[#246B32]/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-[#172117]">
                      {t.author}
                    </p>
                    <span title="Verified Diner" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32]" aria-label="Verified Diner" />
                    </span>
                  </div>

                  <p className="text-xs text-[#8A6245] mt-0.5">
                    {t.role} • <span className="text-[#4D574B]">{t.location}</span>
                  </p>
                </div>
                {t.date && (
                  <span className="text-[10px] text-[#8A6245]/70 font-medium">
                    {t.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

