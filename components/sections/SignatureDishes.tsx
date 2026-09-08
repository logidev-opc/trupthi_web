import Image from "next/image";
import Link from "next/link";
import { Sparkles, Utensils } from "lucide-react";
import { menuItems } from "@/data/menu";

export default function SignatureDishes() {
  const signatures = menuItems.filter((i) => i.isSignature).slice(0, 4);

  return (
    <section className="py-20 bg-[#F1EEDF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#246B32]" />
              <span>Chef&apos;s Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#172117] font-serif english-heading">
              Our Signature Specialties
            </h2>
          </div>

          <Link
            href="/menu"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#246B32] hover:text-[#123D22] transition-colors"
          >
            <span>Explore All Menu Items</span>
            <Utensils className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Signature Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.map((dish) => (
            <div
              key={dish.id}
              className="group relative rounded-3xl bg-white border border-[#246B32]/15 hover:border-[#246B32]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image with zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE7DB]">
                <Image
                  src={dish.image || "/images/menu/millet-cone-idli.png"}
                  alt={dish.englishName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D22]/80 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#123D22]/85 backdrop-blur-sm text-[#A5D6A7] text-xs font-bold border border-[#5B963C]/30">
                  {dish.price || dish.pricePlaceholder || "₹90"}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#172117] font-serif mb-2 group-hover:text-[#246B32] transition-colors">
                    {dish.englishName}
                  </h3>
                  <p className="text-xs text-[#4D574B] line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#246B32]/10 flex items-center justify-between text-[11px] text-[#246B32] font-semibold">
                  <span>Farm Fresh Produce</span>
                  <span className="text-[#5B963C]">● Pure Ghee</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
