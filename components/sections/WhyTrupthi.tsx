import { Sprout, UtensilsCrossed, Sparkles, Heart } from "lucide-react";

export default function WhyTrupthi() {
  const values = [
    {
      title: "PURE INGREDIENTS",
      desc: "Desi cow ghee, bull-driven oils, and farm fresh vegetables with zero artificial colors.",
      icon: Sprout,
    },
    {
      title: "TRADITIONAL TASTE",
      desc: "Time-tested ancestral recipes cooked slowly in seasoned clay and heavy brass cookware.",
      icon: UtensilsCrossed,
    },
    {
      title: "FRESH PREPARATION",
      desc: "Spices ground fresh daily on stone mortars; dishes prepared hot to order.",
      icon: Sparkles,
    },
    {
      title: "MADE WITH CARE",
      desc: "Served on natural banana leaf with heartfelt Telugu hospitality and respect.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-[#F1EEDF] border-y border-[#246B32]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#246B32] mb-2">
            Why TRUPTHI
          </h2>
          <p className="text-2xl sm:text-3xl font-bold font-serif text-[#172117]">
            The Pillars of Wholesome Telugu Dining
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="p-7 rounded-2xl bg-white border border-[#246B32]/15 text-center flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EBF4E8] flex items-center justify-center text-[#246B32] mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xs font-extrabold tracking-wider text-[#172117] uppercase mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-[#4D574B] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
