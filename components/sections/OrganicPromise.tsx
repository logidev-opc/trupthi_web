import { Leaf, Milk, Flame, Award, Sparkles } from "lucide-react";

const ingredients = [
  {
    number: "01",
    icon: Milk,
    title: "Pure Desi Cow Ghee",
    description:
      "Aromatic, golden desi cow ghee that enhances every rice dish, sambar, and sweet with divine flavor and wholesome vitality.",
  },
  {
    number: "02",
    icon: Leaf,
    title: "Farm-Fresh Greens & Veggies",
    description:
      "Crisp gongura, palak, methi, tender purple eggplants, and garden okra sourced fresh every dawn to keep nutrients intact.",
  },
  {
    number: "03",
    icon: Flame,
    title: "Native Grains & Cold-Pressed Oils",
    description:
      "Unpolished Sona Masoori rice, native green gram for pesarattu, and pure cold-pressed groundnut and sesame oils.",
  },
  {
    number: "04",
    icon: Award,
    title: "Zero Artificial Enhancers",
    description:
      "Strictly zero artificial colors, zero MSG, and zero preservatives. Pure wholesome food prepared with genuine care.",
  },
];

export default function OrganicPromise() {
  return (
    <section
      id="ingredients"
      className="py-20 lg:py-28 bg-[#F8F7EE] bg-natural-texture relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#246B32]/10 border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Natural Ingredient Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] font-serif telugu-heading mb-2">
            మంచి రుచి... మంచి పదార్థాలతో మొదలవుతుంది
          </h2>

          <p className="text-xl sm:text-2xl text-[#246B32] font-serif english-heading italic mb-4">
            Good food starts with good ingredients.
          </p>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#246B32]" />
            <span className="text-[#246B32]">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#246B32]" />
          </div>

          <p className="text-sm sm:text-base text-[#4D574B] leading-relaxed">
            We honor the earth and ancient culinary wisdom by carefully choosing every single ingredient for purity, nutrition, and authentic home-style flavors.
          </p>
        </div>

        {/* 4 Ingredient Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ingredients.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="group relative p-8 rounded-2xl bg-white border border-[#246B32]/15 hover:border-[#246B32]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-serif text-[#246B32]/25 group-hover:text-[#246B32] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF4E8] border border-[#246B32]/20 flex items-center justify-center text-[#246B32] group-hover:scale-110 group-hover:bg-[#246B32] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#172117] mb-3 group-hover:text-[#246B32] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4D574B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-[#246B32]/30 group-hover:w-full transition-all duration-500 mt-6" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
