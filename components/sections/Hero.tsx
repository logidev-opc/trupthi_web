import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  UtensilsCrossed,
  MapPin,
  Star,
  Flame,
  Leaf,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-[760px] xl:min-h-[820px] flex items-center bg-[#07170C] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden scroll-mt-24 selection:bg-[#5B963C]/30"
    >
      {/* Dynamic Luxury Ambient Lighting & Depth Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051109] via-[#071A0E] to-[#040E08] -z-10" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(197,154,69,0.18),_transparent_70%)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,_rgba(36,107,50,0.22),_transparent_65%)] blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(226,190,108,0.12),_transparent_65%)] blur-3xl pointer-events-none -z-10" />

      {/* Subtle organic dotted overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTAs ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Glowing Glass Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-[#C59A45]/40 text-xs sm:text-sm text-[#F4E6C3] font-semibold tracking-wide mb-6 shadow-[0_4px_20px_rgba(197,154,69,0.15)] animate-in fade-in slide-in-from-top-3 duration-500">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5B963C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5B963C]" />
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#E2BE6C]" />
                100% Pure Desi Cow Ghee & Organic Dining
              </span>
            </div>

            {/* Main Grand Headline (Telugu Calligraphy + Golden Glow) */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold font-serif tracking-tight leading-[1.12] mb-5 text-white telugu-heading">
              ప్రకృతి నుంచి...
              <span className="block mt-1.5 bg-gradient-to-r from-[#FDFBF7] via-[#E2BE6C] to-[#C59A45] bg-clip-text text-transparent drop-shadow-sm">
                పళ్ళెం వరకు
              </span>
            </h1>

            {/* English Luxury Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#E8DFD1] font-serif italic tracking-wide mb-6 leading-relaxed">
              Pure Organic Food. Authentic Telugu Taste.
            </p>

            {/* Description Sub-paragraph */}
            <p className="text-sm sm:text-base text-[#B8C7B9] leading-relaxed max-w-xl mb-7">
              Slow-cooked in seasoned clay pots over gentle heat, prepared with hand-pounded spices, and served piping hot on fresh green banana leaves.
            </p>

            {/* 3 Core Value Chips */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-lg mb-8">
              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left transition-all hover:bg-white/[0.09] hover:border-[#5B963C]/50">
                <div className="w-8 h-8 rounded-xl bg-[#246B32]/40 text-[#A5D6A7] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">Pure Desi Ghee</h2>
                  <p className="text-[10px] text-[#A5D6A7]">Bilona Churned</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left transition-all hover:bg-white/[0.09] hover:border-[#5B963C]/50">
                <div className="w-8 h-8 rounded-xl bg-[#246B32]/40 text-[#A5D6A7] flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">Banana Leaf</h2>
                  <p className="text-[10px] text-[#A5D6A7]">Sacred Feast</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left transition-all hover:bg-white/[0.09] hover:border-[#5B963C]/50">
                <div className="w-8 h-8 rounded-xl bg-[#246B32]/40 text-[#A5D6A7] flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-white">Clay Pots</h2>
                  <p className="text-[10px] text-[#A5D6A7]">Slow Cooked</p>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#0A1F10] bg-gradient-to-r from-[#E2BE6C] via-[#C59A45] to-[#A57D30] hover:from-[#F4E6C3] hover:to-[#C59A45] shadow-[0_10px_35px_rgba(197,154,69,0.35)] hover:shadow-[0_14px_45px_rgba(197,154,69,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group border border-[#F4E6C3]/40 cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#0A1F10]" />
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 text-[#0A1F10] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/visit"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-[#F8F7EE] bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#E2BE6C]" />
                <span>Visit Us</span>
              </Link>
            </div>

            {/* Customer Rating Proof (Bottom Left) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-[#246B32] border-2 border-[#07170C] flex items-center justify-center text-xs font-bold text-white">
                  రా
                </span>
                <span className="w-8 h-8 rounded-full bg-[#8A6245] border-2 border-[#07170C] flex items-center justify-center text-xs font-bold text-white">
                  సు
                </span>
                <span className="w-8 h-8 rounded-full bg-[#C59A45] border-2 border-[#07170C] flex items-center justify-center text-xs font-bold text-[#07170C]">
                  వెం
                </span>
                <span className="w-8 h-8 rounded-full bg-[#123D22] border-2 border-[#07170C] flex items-center justify-center text-[10px] font-bold text-[#A5D6A7]">
                  +2.5k
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#E2BE6C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[#9EABA0]">From 2,500+ authentic Telugu food lovers</p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE VISUAL SHOWCASE ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            
            {/* Ambient Golden Halo behind the Feast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(226,190,108,0.25),_transparent_70%)] blur-2xl pointer-events-none scale-110" />

            <div className="relative w-full group">
              {/* Outer Golden Border Glow Container */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-2.5 bg-gradient-to-br from-[#E2BE6C]/40 via-white/10 to-[#246B32]/30 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:shadow-[0_30px_90px_rgba(197,154,69,0.3)]">
                
                {/* Main High-Res Thali Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] rounded-2xl overflow-hidden bg-[#0A1A0F]">
                  <Image
                    src="/images/telugu-thali-hero.jpg"
                    alt="Authentic Andhra Telugu Vegetarian Banana Leaf Thali Feast with Desi Cow Ghee and Traditional Curries"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transform group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Gentle cinematic darkening at bottom edges for badge contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06140A]/85 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-2xl bg-[#0C2214]/90 backdrop-blur-md border border-[#5B963C]/40 text-white shadow-xl flex items-center gap-2.5 transform hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 rounded-xl bg-[#246B32] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#F4E6C3]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#A5D6A7] uppercase tracking-wider">
                    Grand Andhra Bhojanam
                  </p>
                  <p className="text-xs font-semibold text-white">
                    Unlimited Pure Vegetarian Feast
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 px-4 py-3 rounded-2xl bg-[#091D10]/92 backdrop-blur-md border border-[#C59A45]/40 text-white shadow-2xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 max-w-xs sm:max-w-sm">
                <div className="w-9 h-9 rounded-xl bg-[#C59A45]/25 border border-[#C59A45]/40 flex items-center justify-center shrink-0 text-[#E2BE6C]">
                  <Flame className="w-5 h-5 text-[#E2BE6C]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F4E6C3]">
                    Clay Pot Cooked Daily
                  </p>
                  <p className="text-[11px] text-[#D8CBB8] leading-tight">
                    Slow-cooked with pure cow ghee & cold-pressed oils
                  </p>
                </div>
              </div>

              {/* Live Hours Badge: Bottom Right */}
              <div className="hidden sm:flex absolute -bottom-4 right-6 px-3.5 py-1.5 rounded-full bg-[#123D22]/95 backdrop-blur-md border border-[#5B963C]/50 text-white items-center gap-1.5 shadow-lg">
                <Clock className="w-3.5 h-3.5 text-[#5B963C]" />
                <span className="text-[11px] font-semibold text-[#F8F7EE]">
                  Open 7:00 AM – 10:30 PM
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
