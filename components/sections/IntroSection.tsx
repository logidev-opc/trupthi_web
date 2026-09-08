import { Leaf } from "lucide-react";

// 1. A2 Milk, Curd & Ghee (Traditional Milk Bottle & Pot)
function A2MilkIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M11 7h10v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V7z" fill="currentColor" opacity="0.3" />
      <path d="M13 3h6v4h-6V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7c-2 2-4 5-4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V16c0-4-2-7-4-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20c2-1 4-1 6 0s4 1 6 0 3-.5 4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="16" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 2. Desi Rice Varieties (Golden Indigenous Paddy Sheaf)
function DesiRiceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 29V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 11c3-4 8-4 10-1-1 3-4 5-10 1zM16 16c4-3 9-2 10 2-2 3-6 4-10-2zM16 21c3-3 8-2 9 2-2 3-5 3-9-2z" fill="currentColor" opacity="0.25" />
      <path d="M16 11c-3-4-8-4-10-1 1 3 4 5 10 1zM16 16c-4-3-9-2-10 2 2 3 6 4 10-2zM16 21c-3-3-8-2-9 2 2 3 5 3 9-2z" fill="currentColor" opacity="0.25" />
      <path d="M16 11c3-4 8-4 10-1-1 3-4 5-10 1zM16 16c4-3 9-2 10 2-2 3-6 4-10-2zM16 21c3-3 8-2 9 2-2 3-5 3-9-2zM16 11c-3-4-8-4-10-1 1 3 4 5 10 1zM16 16c-4-3-9-2-10 2 2 3 6 4 10-2zM16 21c-3-3-8-2-9 2 2 3 5 3 9-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

// 3. Handmade Pulses (Traditional Stone Grinder & Split Dal)
function HandmadePulsesIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="16" cy="18" rx="12" ry="7" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      <ellipse cx="16" cy="13" rx="9" ry="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="13" r="2" fill="currentColor" />
      <path d="M16 11v-5M15 6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="24" r="1.5" fill="currentColor" />
      <circle cx="14" cy="26" r="1.5" fill="currentColor" />
      <circle cx="21" cy="25" r="1.5" fill="currentColor" />
      <circle cx="24" cy="23" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 4. Nutrient-Rich Millets (Siridhanya Stalks)
function MilletsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 29c2-8 6-15 13-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="9" r="2" fill="currentColor" />
      <circle cx="19" cy="12" r="2" fill="currentColor" />
      <circle cx="22" cy="15" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="18" cy="20" r="2" fill="currentColor" />
      <circle cx="13" cy="21" r="2" fill="currentColor" />
      <path d="M13 25c-4-2-6-6-6-9 4 0 7 3 8 7" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// 5. Bull Driven Oils (Traditional Wooden Chekku & Pure Oil)
function BullOilsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 3c-4 5-8 9.5-8 14.5a8 8 0 1 0 16 0C24 12.5 20 8 16 3z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 13c-2 2.5-4 4.5-4 7a4 4 0 0 0 8 0c0-2.5-2-4.5-4-7z" fill="currentColor" />
      <path d="M6 29h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 6. Natural & Palm Jaggery (Organic Jaggery Mound & Palm Leaf)
function JaggeryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 25c-1-6 2-13 8-13s9 7 8 13H8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" strokeLinejoin="round" />
      <path d="M11 25c.5-4 2-8 5-8s4.5 4 5 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 6c3 3 4 8 2 11-2-1-4-4-4-7 0-2 1-3 2-4z" fill="currentColor" />
      <path d="M22 6c-2 2-3 5-2 8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 28h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 7. Seasonal Fruits & Vegetables (Fresh Harvest Basket)
function SeasonalProduceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 11c-4 3-5 9-2 13s8 4 12 1 5-9 2-13c-2-2-4-2-6 0l-6-1z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M15 6c-1 3-3 4-5 4M15 6c2 1 4 3 4 5M15 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 16c3-1 6 1 7 4-2 2-5 2-7-1z" fill="currentColor" />
    </svg>
  );
}

// 8. Traditional Pickles & Papads (Ceramic Jaadi / Bharani & Papad)
function PicklesPapadsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 12c-2 3-2 7 0 10 2 3 5 4 8 4s6-1 8-4c2-3 2-7 0-10H8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
      <path d="M9 12h14v-2c0-1-1-2-2-2h-3V6h-4v2h-3c-1 0-2 1-2 2v2z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.5" />
      <path d="M7 12c3 1 15 1 18 0" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="23" cy="22" rx="6" ry="5" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.15" />
      <circle cx="21" cy="21" r="0.75" fill="currentColor" />
      <circle cx="24" cy="23" r="0.75" fill="currentColor" />
      <circle cx="23" cy="20" r="0.75" fill="currentColor" />
    </svg>
  );
}

// 9. Sacred Pooja Essentials (Brass Deepam Diya & Flame)
function PoojaItemsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M7 19c2 4 6 6 9 6s7-2 9-6c1-1 0-2-2-2H9c-2 0-3 1-2 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M12 25v3h8v-3M10 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 5c-3 4-4 6-2 9 1 1 3 2 4 0 2-3 0-6-2-9z" fill="currentColor" />
      <circle cx="16" cy="11" r="1.5" fill="#FFF" />
    </svg>
  );
}

// 10. Seasoned Clay Pots (Traditional Earthen Handi Pot)
function ClayPotsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 14c-2 4-1 9 2 12s8 3 12 0 4-8 2-12H6z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
      <path d="M7 14h18v-2c0-1.5-2-3-5-3h-2V7h-4v2h-2c-3 0-5 1.5-5 3v2z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.4" />
      <path d="M4 14h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 19c2 1 12 1 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const experienceOfferings = [
  // Row 1 (Line 1: 5 items)
  {
    icon: A2MilkIcon,
    teluguTitle: "దేశీయ ఆవుపాలు, పెరుగు & నెయ్యి",
    englishTitle: "A-2 Cow Milk, Curd & Ghee",
    description:
      "Pure indigenous A2 bilona-churned cow ghee, thick traditional curd, and fresh whole milk.",
  },
  {
    icon: DesiRiceIcon,
    teluguTitle: "దేశవాళీ బియ్యం",
    englishTitle: "Desi Rice Varieties",
    description:
      "Traditional unpolished indigenous rice grains, rich in natural bran, fiber, and authentic rustic taste.",
  },
  {
    icon: HandmadePulsesIcon,
    teluguTitle: "విసిరిన పప్పులు",
    englishTitle: "Handmade Pulses",
    description:
      "Stone-ground and hand-processed native pulses preserving whole natural proteins and nutrients.",
  },
  {
    icon: MilletsIcon,
    teluguTitle: "చిరుధాన్యాలు",
    englishTitle: "Nutrient-Rich Millets",
    description:
      "Organic native Siridhanyalu (Ragi, Jowar, Korralu, Sajjalu) cultivated for sustained vitality.",
  },
  {
    icon: BullOilsIcon,
    teluguTitle: "ఎద్దు గానుగ నూనెలు",
    englishTitle: "Bull Driven Oils",
    description:
      "Slowly pressed using traditional wooden chekku without heat or chemicals.",
  },

  // Row 2 (Line 2: 5 items)
  {
    icon: JaggeryIcon,
    teluguTitle: "ప్రకృతి బెల్లం, తాటిబెల్లం",
    englishTitle: "Jaggery & Palm Jaggery",
    description:
      "Unrefined mineral-rich palm jaggery and pure organic cane jaggery, free from chemicals.",
  },
  {
    icon: SeasonalProduceIcon,
    teluguTitle: "పండ్లు & కూరగాయలు",
    englishTitle: "Seasonal Fruits & Vegetables",
    description:
      "Crisp gongura, native country greens, and seasonal farm-fresh produce sourced daily.",
  },
  {
    icon: PicklesPapadsIcon,
    teluguTitle: "పచ్చళ్ళు & అప్పడాలు",
    englishTitle: "Pickles & Papads",
    description:
      "Authentic sun-cured Andhra avakaya, gongura pachadi, and hand-rolled sun-dried crisp papads.",
  },
  {
    icon: PoojaItemsIcon,
    teluguTitle: "పూజా సామాగ్రి",
    englishTitle: "Pooja Items & Essentials",
    description:
      "Pure desi cow dung dhoop, organic camphor, handmade cotton wicks, and sacred essentials.",
  },
  {
    icon: ClayPotsIcon,
    teluguTitle: "మట్టి పాత్రలు",
    englishTitle: "Seasoned Clay Pots",
    description:
      "Naturally seasoned earthen cookware that gently circulates heat, locking in earthy flavor.",
  },
];

export default function IntroSection() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-[#F8F7EE] bg-natural-texture relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#246B32]/20 text-[#246B32] text-xs font-semibold uppercase tracking-widest mb-4">
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
          &ldquo;తాజా పదార్థాలు, స్వచ్ఛమైన గో ఉత్పత్తులు, సాంప్రదాయ వంట విధానాలు — ప్రతి పళ్లెంలో నిజమైన తెలుగు ఆహార సంస్కృతిని అందించడమే మా లక్ష్యం.&rdquo;
        </p>

        <p className="text-sm sm:text-base text-[#4D574B] mt-4 leading-relaxed max-w-2xl mx-auto">
          At TRUPTHI, we believe food should bring holistic wellness and genuine contentment. Every recipe is slow-cooked in seasoned earthen clay pots, utilizing hand-pounded spices, bull-driven oils, and pure A2 desi cow ghee.
        </p>

        {/* 10 Traditional Offerings Grid (5 cards in Row 1, 5 cards in Row 2 on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4.5 lg:gap-5 mt-10 sm:mt-14 text-left">
          {experienceOfferings.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#246B32]/15 shadow-xs hover:shadow-xl hover:border-[#246B32]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Authentic Custom Icon Header */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EBF4E8] group-hover:bg-[#246B32] text-[#246B32] group-hover:text-[#F4E6C3] flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 border border-[#246B32]/10 shadow-xs">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Telugu Title with Heritage Bullet */}
                  <p className="text-xs font-bold text-[#246B32] font-serif mb-1 telugu-heading tracking-tight flex items-start gap-1">
                    <span className="text-[#C59A45] text-xs shrink-0 mt-0.5">✦</span>
                    <span className="leading-snug">{item.teluguTitle}</span>
                  </p>

                  {/* English Title */}
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#172117] mb-1.5 leading-snug">
                    {item.englishTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-[#4D574B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
