import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils, Heart } from "lucide-react";

export default function FeaturedMeal() {
  const mealCourses = [
    {
      step: "01",
      title: "First Course: Pure Desi Cow Ghee & Mudda Pappu with Avakaya",
      desc: "Steaming hot Sona Masoori rice topped with velvety thick toor dal, dollops of fragrant desi cow ghee, and fiery avakaya mango pickle.",
    },
    {
      step: "02",
      title: "Second Course: Gutti Vankaya Gravy & Crisp Bendakaya Fry",
      desc: "Tender stuffed sesame-peanut baby eggplant curry paired with crunchy farm-fresh okra fry and sun-dried appadalu.",
    },
    {
      step: "03",
      title: "Grand Finale: Pepper Cumin Rasam & Farm Fresh Curd",
      desc: "Digestive black pepper rasam, followed by creamy whole buffalo curd and sweet Atreyapuram Poothareku.",
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
                  src="/images/hero-bhojanam.jpg"
                  alt="TRUPTHI Grand Andhra Banana Leaf Meal"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2214]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0C2214]/90 backdrop-blur-md border border-[#5B963C]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#A5D6A7] uppercase tracking-wider">
                    Unlimited Traditional Feast
                  </p>
                  <p className="text-sm font-semibold text-[#F8F7EE]">
                    Served with Pure Desi Cow Ghee
                  </p>
                </div>
                <div className="px-3.5 py-1 rounded-full bg-[#246B32] text-white text-xs font-bold shrink-0 border border-[#5B963C]/40">
                  Daily Lunch & Dinner
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Dining Flow */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#A5D6A7] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Dining Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight text-white mb-2 telugu-heading">
              ఒక్క పళ్లెంలో...
              <span className="block text-[#A5D6A7] mt-1">ఎన్నో సంప్రదాయ రుచులు</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#DCD5C4] font-serif italic mb-6">
              A taste of Telugu tradition, served the way it should be.
            </p>

            <p className="text-sm sm:text-base text-[#D4C3AC] leading-relaxed mb-8">
              Eating on a natural banana leaf connects us directly with nature. The warm food gently releases beneficial plant polyphenols from the leaf, imparting an earthy scent and wholesome goodness to every morsel.
            </p>

            {/* 3 Step Dining Flow */}
            <div className="space-y-4">
              {mealCourses.map((c) => (
                <div
                  key={c.step}
                  className="p-4 rounded-2xl bg-white/[0.06] border border-[#5B963C]/25 hover:border-[#5B963C]/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-black font-serif text-[#A5D6A7] shrink-0">
                      {c.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-serif mb-1">
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#246B32] hover:bg-[#5B963C] text-white transition-colors shadow-lg shadow-[#246B32]/30 border border-[#5B963C]/40"
              >
                <Utensils className="w-4 h-4" />
                <span>View Full Menu</span>
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#D8CBB8]">
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
