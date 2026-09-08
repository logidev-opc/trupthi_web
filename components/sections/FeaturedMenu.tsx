"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Leaf,
  Heart,
  Droplets,
  Flame,
} from "lucide-react";
import {
  menuCategories,
  featuredDish,
  bhojanamItems,
  idliVadaItems,
  milletDosaItems,
  pesarattuItems,
  beverageItems,
  pantryProducts,
} from "@/data/menu";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const showAll = activeCategory === "all";

  return (
    <section
      id="menu"
      className="pt-16 pb-10 lg:pt-24 lg:pb-12 bg-[#F8F7EE] bg-natural-texture relative scroll-mt-24 overflow-hidden selection:bg-[#246B32]/20"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#246B32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= 2. MENU SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          {/* Supporting trust line */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#246B32]/20 text-[#246B32] text-xs font-semibold uppercase tracking-widest mb-4 shadow-xs">
            <Leaf className="w-3.5 h-3.5 text-[#246B32]" />
            <span>Pure • Traditional • Wholesome</span>
          </div>

          {/* Centered Main Heading */}
          <div className="relative inline-block mb-3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172117] font-serif english-heading tracking-tight">
              OUR MENU
            </h2>
            {/* Subtle natural leaf decoration */}
            <span className="hidden sm:block absolute -top-2 -right-8 text-[#246B32]/40 text-lg">
              🍃
            </span>
            <span className="hidden sm:block absolute -bottom-1 -left-8 text-[#246B32]/40 text-lg">
              🌿
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#8A6245] font-serif italic mb-2">
            From Our Roots to Your Table
          </p>

          <p className="text-xs sm:text-sm text-[#4D574B] max-w-xl mx-auto leading-relaxed">
            Authentic Andhra delicacies slow-crafted with indigenous grains, pure desi cow ghee, and bull-driven oils.
          </p>
        </div>

        {/* ================= 3. CATEGORY NAVIGATION ================= */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto flex-nowrap pb-2.5 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-4.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#246B32] text-white shadow-md shadow-[#246B32]/25 scale-[1.02]"
                      : "bg-[#EBF4E8] text-[#246B32] hover:bg-[#DDECD9] border border-[#246B32]/15 hover:border-[#246B32]/30"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 4. FEATURED DISH (MILLET CONE IDLY) ================= */}
        {(showAll || activeCategory === "millet-specials" || activeCategory === "idli-vada") && (
          <div className="mb-16 sm:mb-20">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/20 shadow-xl shadow-[#172117]/5 hover:shadow-2xl hover:border-[#246B32]/40 transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Large Realistic Food Photograph */}
                <div className="lg:col-span-6 order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#F0EFE6] group shadow-inner">
                    <Image
                      src={featuredDish.image || "/images/menu/millet-cone-idli.jpg"}
                      alt={featuredDish.englishName}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                    {/* Healthy Choice Badge on Image */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#123D22]/90 backdrop-blur-md border border-[#5B963C]/40 text-white text-xs font-bold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#E2BE6C]" />
                      <span>{featuredDish.badge || "Healthy Choice"}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Dish Details */}
                <div className="lg:col-span-6 order-2 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest telugu-heading">
                        {featuredDish.teluguName}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#246B32] text-xs font-bold">
                        <Heart className="w-3 h-3 fill-[#246B32]" />
                        Healthy Choice
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172117] font-serif english-heading tracking-tight mb-2">
                      {featuredDish.englishName}
                    </h3>

                    <p className="text-sm sm:text-base text-[#8A6245] font-serif font-semibold italic mb-4">
                      {featuredDish.grainInfo}
                    </p>

                    <p className="text-sm text-[#4D574B] leading-relaxed mb-6">
                      {featuredDish.description}
                    </p>

                    {/* Grain Information Box */}
                    <div className="p-4 rounded-2xl bg-[#F8F7EE] border border-[#246B32]/15 mb-6">
                      <p className="text-xs font-semibold text-[#172117] mb-1">
                        🌾 Grain & Nutritional Composition:
                      </p>
                      <p className="text-xs text-[#4D574B] leading-relaxed">
                        Steamed conical idlis crafted from stone-ground ancient Ragi (Finger Millet), Sajja (Pearl Millet), and Jonna (Sorghum). High fiber, low glycemic index, and naturally easy to digest.
                      </p>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="pt-5 border-t border-[#246B32]/15 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs text-[#8A6245] block font-medium">Price</span>
                      <span className="text-3xl font-extrabold text-[#246B32] font-serif">
                        {featuredDish.price}
                      </span>
                    </div>

                    <a
                      href="#visit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#246B32] hover:bg-[#123D22] text-white text-sm font-bold shadow-md shadow-[#246B32]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                    >
                      <span>Explore Dish</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-16 sm:space-y-24">
          {/* ================= 4.5. MENU CATEGORY: BHOJANAM (FULL THALI ONLY) ================= */}
          {(showAll || activeCategory === "bhojanam") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Food Photography */}
                <div className="lg:col-span-6 order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#F0EFE6] shadow-sm group">
                    <Image
                      src="/images/hero-bhojanam-feast.jpg"
                      alt="Grand Andhra Banana Leaf Bhojanam Full Thali Feast"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#123D22]/90 backdrop-blur-md border border-[#5B963C]/40 text-white text-xs font-bold shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#E2BE6C]" />
                      <span>Unlimited Banana Leaf Feast</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between text-xs">
                      <span className="text-[#A5D6A7] font-semibold">100% Pure Desi Ghee</span>
                      <span className="text-white/80">Clay Pot Cooked</span>
                    </div>
                  </div>
                </div>

                {/* Right: Full Thali Dish Details */}
                <div className="lg:col-span-6 order-2 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest telugu-heading">
                        ఆంధ్రా సాంప్రదాయ భోజనం
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#EBF4E8] text-[#246B32] text-xs font-bold">
                        <Leaf className="w-3 h-3" />
                        Unlimited Feast
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172117] font-serif english-heading tracking-tight mb-1">
                      Full Thali
                    </h3>

                    <p className="text-sm font-bold text-[#246B32] font-serif mb-4 telugu-heading">
                      సంపూర్ణ అరటి ఆకు భోజనం
                    </p>

                    {/* Daily Changing Menu Caption */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F8F7EE] border border-[#246B32]/15 mb-6">
                      <div className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">🌿</span>
                        <div className="space-y-1">
                          <p className="text-xs sm:text-[13px] text-[#172117] font-semibold leading-snug">
                            తాజా కాలానుగుణ పంటలను బట్టి కూరలు, వేపుళ్లు & పచ్చళ్లు ప్రతిరోజూ మారుతుంటాయి.
                          </p>
                          <p className="text-[11px] sm:text-xs text-[#8A6245] italic font-serif">
                            Curries, fries & stone-ground chutneys change daily with fresh seasonal harvest.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Block */}
                  <div className="pt-4 border-t border-[#246B32]/15 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <span className="text-xs text-[#8A6245] block font-medium">Full Thali Price</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-[#246B32] font-serif">
                          ₹314
                        </span>
                        <span className="text-xs text-[#4D574B] font-medium">/ per person</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold">
                      <span>✨ Unlimited Servings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 5. MENU CATEGORY: IDLI & VADA ================= */}
          {(showAll || activeCategory === "idli-vada") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Food Photography */}
                <div className="lg:col-span-5 order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EFE6] shadow-sm group">
                    <Image
                      src="/images/menu/idli-vada.jpg"
                      alt="Traditional South Indian Idli & Vada with Sambar and Chutneys"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Right: Category Header & Menu List */}
                <div className="lg:col-span-7 order-2 text-left">
                  <div className="mb-6 pb-4 border-b border-[#246B32]/15">
                    <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest block mb-1 telugu-heading">
                      ఇడ్లీ & వడ
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172117] font-serif english-heading tracking-tight">
                      IDLI & VADA
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A6245] mt-1 italic font-serif">
                      Soft steamed rice cakes & golden lentil crisps served with stone-ground chutneys.
                    </p>
                  </div>

                  {/* Menu List with Dotted Line Leaders & Right-Aligned Prices */}
                  <div className="space-y-4">
                    {idliVadaItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-baseline justify-between gap-2 group hover:text-[#246B32] transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-[#172117] group-hover:text-[#246B32] transition-colors">
                            {item.englishName}
                          </span>
                          {item.teluguName && (
                            <span className="text-[11px] text-[#4D574B] font-serif telugu-heading">
                              {item.teluguName}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 mx-3 border-b-2 border-dotted border-[#246B32]/25 relative -top-1" />
                        <span className="text-base sm:text-lg font-bold text-[#246B32] font-serif shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 6. MENU CATEGORY: MILLET DOSA (ALTERNATING: MENU LEFT, PHOTO RIGHT) ================= */}
          {(showAll || activeCategory === "millet-specials") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Mobile: Photo First; Desktop: Menu Left (lg:col-span-7) */}
                <div className="lg:col-span-7 order-2 lg:order-1 text-left">
                  <div className="mb-6 pb-4 border-b border-[#246B32]/15">
                    <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest block mb-1 telugu-heading">
                      మిల్లెట్ దోశల రకాలు
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172117] font-serif english-heading tracking-tight">
                      MILLET DOSA
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A6245] mt-1 italic font-serif">
                      Crispy crepes made from naturally fermented Siridhanyalu, golden roasted on cast iron.
                    </p>
                  </div>

                  {/* Menu List */}
                  <div className="space-y-4">
                    {milletDosaItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-baseline justify-between gap-2 group hover:text-[#246B32] transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-[#172117] group-hover:text-[#246B32] transition-colors">
                            {item.englishName}
                          </span>
                          {item.teluguName && (
                            <span className="text-[11px] text-[#4D574B] font-serif telugu-heading">
                              {item.teluguName}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 mx-3 border-b-2 border-dotted border-[#246B32]/25 relative -top-1" />
                        <span className="text-base sm:text-lg font-bold text-[#246B32] font-serif shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Large Food Photograph */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EFE6] shadow-sm group">
                    <Image
                      src="/images/menu/millet-dosa.jpg"
                      alt="Golden Crisp South Indian Millet Dosa with Chutneys and Sambar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 7. MENU CATEGORY: PESARATTU ================= */}
          {(showAll || activeCategory === "pesarattu") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Food Photography */}
                <div className="lg:col-span-5 order-1">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-[#F0EFE6] shadow-sm group">
                    <Image
                      src="/images/menu/pesarattu.jpg"
                      alt="Authentic Andhra Pesarattu with Ginger Allam Pachadi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Right: Category Header & Menu List */}
                <div className="lg:col-span-7 order-2 text-left">
                  <div className="mb-6 pb-4 border-b border-[#246B32]/15">
                    <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest block mb-1 telugu-heading">
                      ఆంధ్రా పెసరట్లు
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172117] font-serif english-heading tracking-tight">
                      PESARATTU
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A6245] mt-1 italic font-serif">
                      Wholesome whole green gram crepes, seasoned with allam pachadi and pure cow ghee.
                    </p>
                  </div>

                  {/* Menu List */}
                  <div className="space-y-3 sm:space-y-3.5">
                    {pesarattuItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-baseline justify-between gap-2 group hover:text-[#246B32] transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-bold text-[#172117] group-hover:text-[#246B32] transition-colors">
                            {item.englishName}
                          </span>
                          {item.teluguName && (
                            <span className="text-[11px] text-[#4D574B] font-serif telugu-heading">
                              {item.teluguName}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 mx-3 border-b-2 border-dotted border-[#246B32]/25 relative -top-1" />
                        <span className="text-base sm:text-lg font-bold text-[#246B32] font-serif shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= 8. MENU CATEGORY: BEVERAGES ================= */}
          {(showAll || activeCategory === "beverages") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all text-left">
              <div className="mb-8 pb-4 border-b border-[#246B32]/15 text-center sm:text-left">
                <span className="text-xs font-bold text-[#246B32] font-serif uppercase tracking-widest block mb-1 telugu-heading">
                  వేడి పానీయాలు
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172117] font-serif english-heading tracking-tight">
                  BEVERAGES
                </h3>
                <p className="text-xs sm:text-sm text-[#8A6245] mt-1 italic font-serif">
                  Aromatic degree brew & pure indigenous cow milk served with timeless warmth.
                </p>
              </div>

              {/* Two Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {beverageItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#F8F7EE] border border-[#246B32]/15 hover:border-[#246B32]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-5 items-center group"
                  >
                    {/* Item Image */}
                    <div className="relative w-full sm:w-36 aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden bg-[#EAE7DB] shrink-0">
                      <Image
                        src={item.image || "/images/menu/filter-coffee.png"}
                        alt={item.englishName}
                        fill
                        sizes="(max-width: 640px) 100vw, 150px"
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between w-full">
                      <div>
                        {item.teluguName && (
                          <span className="text-[11px] font-bold text-[#246B32] font-serif telugu-heading block mb-0.5">
                            {item.teluguName}
                          </span>
                        )}
                        <h4 className="text-lg font-bold text-[#172117] leading-snug mb-2">
                          {item.englishName}
                        </h4>
                        <p className="text-xs text-[#4D574B] leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#246B32]/10">
                        <span className="text-xs text-[#8A6245] font-semibold">Per Serving</span>
                        <span className="text-xl font-extrabold text-[#246B32] font-serif">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= 9. TRADITIONAL PANTRY ================= */}
          {(showAll || activeCategory === "pantry") && (
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#246B32]/15 shadow-lg shadow-[#172117]/5 transition-all text-left">
              {/* Header */}
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E8] text-[#246B32] text-xs font-bold uppercase tracking-wider mb-2">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Artisanal Farm Essentials</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172117] font-serif english-heading tracking-tight mb-2">
                  TRADITIONAL PANTRY
                </h3>
                <p className="text-sm sm:text-base text-[#8A6245] font-serif italic">
                  Pure ingredients rooted in tradition.
                </p>
              </div>

              {/* 5 Product Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                {pantryProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#F8F7EE] border border-[#246B32]/15 hover:border-[#246B32]/40 hover:-translate-y-1 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Product Realistic Image */}
                      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#EAE7DB] mb-4">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover object-center group-hover:scale-106 transition-transform duration-500"
                        />
                      </div>

                      {/* Telugu Tag */}
                      {prod.teluguName && (
                        <span className="text-[11px] font-bold text-[#246B32] font-serif block mb-0.5 telugu-heading">
                          ✦ {prod.teluguName}
                        </span>
                      )}

                      {/* Product Name */}
                      <h4 className="text-base font-bold text-[#172117] mb-2 leading-snug">
                        {prod.name}
                      </h4>

                      {/* Short One-Line Description */}
                      <p className="text-xs text-[#4D574B] leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#246B32]/10 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#246B32] flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#C59A45]" />
                        Stone Pressed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-[#4D574B] max-w-xl mx-auto space-y-1">
          <p className="font-serif italic text-sm text-[#246B32]">
            &ldquo;ఆతిథ్యమే మా సాంప్రదాయం — Food prepared with devotion brings supreme contentment.&rdquo;
          </p>
          <p className="text-[11px] text-[#8A6245]">
            Prepared fresh to order. Vegan & Jain alternatives available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
