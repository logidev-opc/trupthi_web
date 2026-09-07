import { Leaf, UtensilsCrossed, Milk } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="experience" className="py-20 bg-[#F8F7EE] bg-natural-texture relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#EBF4E8] border border-[#246B32]/20 text-[#246B32] text-xs font-semibold uppercase tracking-widest mb-4">
          <Leaf className="w-3.5 h-3.5" />
          <span>The Trupthi Experience</span>
        </div>

        {/* Telugu Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] leading-tight font-serif telugu-heading mb-3">
          మన వంటల్లో...
          <span className="block text-[#246B32] mt-1">మన సంస్కృతి</span>
        </h2>

        {/* English Subtitle */}
        <p className="text-xl sm:text-2xl text-[#8A6245] font-serif italic mb-6">
          Where Tradition Meets Nature
        </p>

        {/* Delicate Green Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#246B32]/50 to-[#246B32]" />
          <div className="w-2 h-2 rotate-45 bg-[#246B32] rounded-xs" />
          <div className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#246B32]/50 to-[#246B32]" />
        </div>

        {/* Narrative Paragraph */}
        <p className="text-lg sm:text-xl text-[#2D382C] font-medium leading-relaxed font-serif max-w-3xl mx-auto">
          &ldquo;తాజా పదార్థాలు, స్వచ్ఛమైన గో ఉత్పత్తులు, సంప్రదాయ వంట విధానాలు — ప్రతి పళ్లెంలో నిజమైన తెలుగు ఆహార సంస్కృతిని అందించడమే మా లక్ష్యం.&rdquo;
        </p>

        <p className="text-sm sm:text-base text-[#4D574B] mt-4 leading-relaxed max-w-2xl mx-auto">
          At TRUPTHI, we believe food should bring holistic wellness and genuine contentment. Every recipe is slow-cooked in seasoned earthen clay pots, utilizing hand-pounded spices and pure desi cow ghee.
        </p>

        {/* 3 Core Experience Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="p-6 rounded-2xl bg-white border border-[#246B32]/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#EBF4E8] flex items-center justify-center text-[#246B32] mb-4">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#172117] mb-2">
              Farm-Fresh Greens & Vegetables
            </h3>
            <p className="text-xs text-[#4D574B] leading-relaxed">
              Procured fresh from trusted local farms to retain natural vitality, enzymes, and crisp rustic taste.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#246B32]/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#EBF4E8] flex items-center justify-center text-[#246B32] mb-4">
              <Milk className="w-5 h-5 text-[#246B32]" />
            </div>
            <h3 className="text-base font-bold text-[#172117] mb-2">
              Pure Desi Cow Ghee & Milk
            </h3>
            <p className="text-xs text-[#4D574B] leading-relaxed">
              Traditionally churned bilona cow ghee and whole dairy that enrich every dish with unforgettable aroma and purity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#246B32]/15 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-[#EBF4E8] flex items-center justify-center text-[#246B32] mb-4">
              <UtensilsCrossed className="w-5 h-5 text-[#246B32]" />
            </div>
            <h3 className="text-base font-bold text-[#172117] mb-2">
              Clay Pot Slow Cooking
            </h3>
            <p className="text-xs text-[#4D574B] leading-relaxed">
              Cooked over gentle heat using stone-ground masalas for deep, aromatic, and easily digestible home-style food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
