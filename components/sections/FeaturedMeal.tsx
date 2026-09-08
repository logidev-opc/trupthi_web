import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils, Heart } from "lucide-react";

export default function FeaturedMeal() {
  const mealCourses = [
    {
      step: "01",
      title: "Signature Millet Specials & Cone Idly (మిల్లెట్ స్పెషల్స్ & కోన్ ఇడ్లీ)",
      desc: "Nutrient-rich stone-ground Ragi, Sajja, and Jonna Cone Idlis along with crispy Millet Dosas, roasted to golden perfection with fragrant Desi Cow Ghee.",
    },
    {
      step: "02",
      title: "Classic Idli, Crispy Vada & Godavari Pesarattu (ఇడ్లీ, వడ & పెసరట్టు)",
      desc: "Steaming hot soft Ghee Idlis, crunchy Medu Vadas, and authentic Upma Pesarattu served with fresh coconut, peanut & ginger allam chutneys.",
    },
    {
      step: "03",
      title: "Degree Filter Coffee & Pure A2 Desi Cow Milk (డిగ్రీ ఫిల్టర్ కాఫీ & దేశీ ఆవు పాలు)",
      desc: "Freshly brewed aromatic South Indian filter coffee served in a traditional brass dabarah, and warm unadulterated indigenous A2 cow milk.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#123D22] text-white relative overflow-hidden bg-dark-forest-texture">
      {/* Decorative botanical ring in background */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-[#5B963C]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 ring-1 ring-[#5B963C]/30 group">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero-bhojanam-feast.jpg"
                  alt="TRUPTHI Grand Andhra Banana Leaf Meal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2214]/90 via-transparent to-transparent" />

              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0C2214]/92 backdrop-blur-md border border-[#5B963C]/30 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-bold text-[#A5D6A7] uppercase tracking-wider truncate">
                    Traditional Banana Leaf Tiffins
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#F8F7EE] truncate">
                    Served with Pure Desi Cow Ghee
                  </p>
                </div>
                <div className="px-2.5 sm:px-3.5 py-1 rounded-full bg-[#246B32] text-white text-[10px] sm:text-xs font-bold shrink-0 border border-[#5B963C]/40">
                  Fresh Daily
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Dining Flow */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#A5D6A7] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Tiffin Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-white mb-2 telugu-heading">
              ఒక్క పళ్లెంలో...
              <span className="block text-[#A5D6A7] mt-1">
                ఎన్నో సాంప్రదాయ రుచులు
              </span>
            </h2>

            <p className="text-base sm:text-xl text-[#DCD5C4] font-serif italic mb-5 sm:mb-6">
              A taste of Telugu tradition, served the way it should be.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#D4C3AC] leading-relaxed mb-6 sm:mb-8">
              Eating on a natural banana leaf connects us directly with nature.
              Every dish is freshly prepared with stone-ground batters, native organic
              millets, pure bull-driven oils, and rich Desi Cow Ghee.
            </p>

            {/* 3 Step Dining Flow */}
            <div className="space-y-3.5 sm:space-y-4">
              {mealCourses.map((c) => (
                <div
                  key={c.step}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.06] border border-[#5B963C]/25 hover:border-[#5B963C]/50 transition-colors"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span className="text-lg sm:text-xl font-black font-serif text-[#A5D6A7] shrink-0">
                      {c.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-serif mb-0.5 sm:mb-1">
                        {c.title}
                      </h3>
                      <p className="text-xs text-[#D8CBB8] leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <Link
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#246B32] hover:bg-[#5B963C] text-white transition-colors shadow-lg shadow-[#246B32]/30 border border-[#5B963C]/40"
              >
                <Utensils className="w-4 h-4" />
                <span>View Full Menu</span>
              </Link>
              <span className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#D8CBB8]">
                <Heart className="w-4 h-4 text-[#A5D6A7]" />
                Served with boundless Telugu hospitality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
