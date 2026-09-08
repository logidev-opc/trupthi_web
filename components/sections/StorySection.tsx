import Image from "next/image";
import { Sprout, Milk, Flame, Utensils, CheckCircle2 } from "lucide-react";

const natureToPlateStages = [
  {
    step: "01",
    icon: Sprout,
    title: "Fresh Ingredients",
    desc: "Naturally grown green vegetables, leafy greens, native grains, and fresh herbs procured directly from partner farms.",
  },
  {
    step: "02",
    icon: Milk,
    title: "Desi Cow Ghee & Milk",
    desc: "Unadulterated whole milk, freshly churned curd, and aromatic desi cow ghee that form the heart of authentic Telugu cuisine.",
  },
  {
    step: "03",
    icon: Flame,
    title: "Traditional Preparation",
    desc: "Slow cooked over gentle heat in seasoned clay pots and heavy brass cookware using fresh stone-ground spices.",
  },
  {
    step: "04",
    icon: Utensils,
    title: "Your Table Feast",
    desc: "Served piping hot on natural fresh green banana leaves with timeless Telugu warmth and hospitality.",
  },
];

export default function StorySection() {
  return (
    <section id="nature-to-plate" className="py-20 lg:py-28 bg-[#F1EEDF] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#246B32]/10 border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-3">
            <Sprout className="w-3.5 h-3.5" />
            <span>The Signature Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] font-serif english-heading mb-2">
            From Nature to Plate
          </h2>

          <p className="text-2xl sm:text-3xl text-[#246B32] font-serif telugu-heading mb-4">
            ప్రకృతి నుంచి... పళ్లెం వరకు
          </p>

          <p className="text-sm sm:text-base text-[#4D574B] leading-relaxed">
            Every meal at TRUPTHI follows a sacred 4-step tradition — from the earth and natural cattle rearing to your banana leaf plate.
          </p>
        </div>

        {/* 4-Stage Visual Journey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {natureToPlateStages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="group relative p-6 rounded-2xl bg-white border border-[#246B32]/15 shadow-sm hover:shadow-lg hover:border-[#246B32]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-serif text-[#246B32]/30 group-hover:text-[#246B32] transition-colors">
                      {stage.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#EBF4E8] flex items-center justify-center text-[#246B32] group-hover:scale-110 group-hover:bg-[#246B32] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#172117] mb-2.5">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#4D574B] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="w-6 h-0.5 bg-[#246B32]/30 group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Split Editorial Story Showcase */}
        <div id="story" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#246B32]/15 scroll-mt-24">
          {/* Left Column: Farm Story Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-[#246B32]/20 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                <Image
                  src="/images/farm-fresh-story.jpg"
                  alt="Organic Farming and Natural Produce for TRUPTHI Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#123D22]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#123D22]/90 backdrop-blur-md border border-[#5B963C]/30 text-white flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#246B32] flex items-center justify-center shrink-0">
                  <Sprout className="w-6 h-6 text-[#A5D6A7]" />
                </div>
                <div>
                  <p className="text-xs text-[#A5D6A7] font-semibold uppercase tracking-wider">
                    Sourced With Care
                  </p>
                  <p className="text-sm font-medium text-[#F8F7EE] line-clamp-1">
                    Fresh natural produce directly from trusted regional farmers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#246B32]/10 border border-[#246B32]/20 text-[#246B32] text-xs font-bold uppercase tracking-widest self-start mb-4">
              <span>Our Roots & Values</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#172117] leading-tight font-serif english-heading mb-4">
              Rooted in Nature, Cooked with Love
            </h3>

            <div className="p-4 rounded-xl bg-white border-l-4 border-[#246B32] mb-6">
              <p className="text-base font-serif font-bold text-[#246B32] leading-relaxed">
                &ldquo;గోవుల అనుబంధం, స్వచ్ఛమైన పదార్థాలు, సాంప్రదాయ వంటింటి ద్వారా మీ పళ్లెంలోకి చేరుతుంది.&rdquo;
              </p>
            </div>

            <div className="space-y-3.5 text-sm text-[#4D574B] leading-relaxed">
              <p>
                TRUPTHI was born out of deep reverence for traditional Telugu food culture. In a world increasingly saturated with artificial flavorings and processed oils, we returned to our ancient roots: natural greens, pure desi cow ghee, and unpolished native grains.
              </p>
              <p>
                Every morning, our cooks grind whole spices on stone mortars, simmer dals in earthenware pots, and temper chutneys with fragrant mustard and curry leaves.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#172117]">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0" />
                <span>Pure Desi Cow Ghee (గో నెయ్యి)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#172117]">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0" />
                <span>Zero artificial colors or MSG</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#172117]">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0" />
                <span>Clay pot slow cooking</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#172117]">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0" />
                <span>Served on natural banana leaf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
