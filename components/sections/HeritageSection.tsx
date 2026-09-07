import Image from "next/image";
import { Sparkles, Utensils, HeartHandshake, ShieldCheck } from "lucide-react";

export default function HeritageSection() {
  const heritagePillars = [
    {
      icon: Utensils,
      title: "Clay & Brass Cookware",
      telugu: "మట్టి పాత్రలు & ఇత్తడి పాత్రలు",
      desc: "Cooking in seasoned unglazed clay pots preserves natural minerals and infuses an authentic rustic aroma.",
    },
    {
      icon: Sparkles,
      title: "Stone-Ground Masalas",
      telugu: "రోట్లో దంచిన సుగంధ ద్రవ్యాలు",
      desc: "Pounding spices on granite stone mortars retains fragrant essential oils without friction heat damage.",
    },
    {
      icon: HeartHandshake,
      title: "Telugu Hospitality",
      telugu: "ఆప్యాయతతో కూడిన వడ్డన",
      desc: "Every guest is received like family, served with genuine warmth and traditional Telugu affection (ఆత్మీయత).",
    },
    {
      icon: ShieldCheck,
      title: "Pure Native Grains",
      telugu: "దేశవాళీ ధాన్యాలు & ముడి బియ్యం",
      desc: "Native paddy varieties and lentils rich in natural fiber, wholesome sweetness, and nourishing vitality.",
    },
  ];

  return (
    <section id="heritage" className="py-20 lg:py-28 bg-[#F8F7EE] bg-natural-texture relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest self-start mb-4">
              <span>Telugu Food Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] leading-tight font-serif telugu-heading mb-2">
              తరతరాల రుచులు...
              <span className="block text-[#246B32] mt-1">మన సంస్కృతి</span>
            </h2>

            <p className="text-xl text-[#8A6245] font-serif italic mb-6">
              &ldquo;Food is more than taste. It is a part of who we are.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#4D574B] leading-relaxed mb-6">
              In Telugu culture, traditional cooking is an art form rooted in seasonal crops, sun-dried spices, pure cow ghee, and sacred hospitality. We preserve this heirloom wisdom in every dish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {heritagePillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-white border border-[#246B32]/15 hover:border-[#246B32]/40 transition-colors shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EBF4E8] flex items-center justify-center text-[#246B32] mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#172117] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4D574B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Heritage Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-[#246B32]/20 group">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                <Image
                  src="/images/heritage-cooking.jpg"
                  alt="Traditional Woodfire Cooking and Clay Pots at TRUPTHI Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#123D22]/85 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#123D22]/90 backdrop-blur-md border border-[#5B963C]/30 text-white">
                <p className="text-xs text-[#A5D6A7] font-bold uppercase tracking-wider">
                  Authentic Rural Heritage
                </p>
                <p className="text-sm font-serif text-[#F8F7EE]">
                  Seasoned clay pots, earthen chulhas & traditional brassware preserved across generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
