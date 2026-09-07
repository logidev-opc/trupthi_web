"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { UtensilsCrossed, Sparkles, Search, X, ChefHat, Filter } from "lucide-react";
import { menuCategories, menuItems } from "@/data/menu";
import { MenuItem } from "@/types/menu";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTag, setActiveTag] = useState<string>("all");

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    menuItems.forEach((item) => {
      item.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;

      // Tag filter
      const matchesTag =
        activeTag === "all" || item.tags?.includes(activeTag);

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.englishName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [activeCategory, activeTag, searchQuery]);

  const resetFilters = () => {
    setActiveCategory("all");
    setActiveTag("all");
    setSearchQuery("");
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F8F7EE] bg-natural-texture relative scroll-mt-24">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#246B32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C59A45]" />
            <span>Sacred Culinary Repertoire</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] font-serif english-heading mb-3">
            Traditional Telugu Vegetarian Delicacies
          </h2>

          <p className="text-base sm:text-lg text-[#4D574B] max-w-2xl mx-auto leading-relaxed">
            Prepared fresh everyday with pure desi cow bilona ghee, heritage grains, heirloom lentils, and cold-pressed oils.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-white rounded-2xl border border-[#246B32]/20 shadow-md p-2 focus-within:border-[#246B32] focus-within:ring-2 focus-within:ring-[#246B32]/20 transition-all">
            <Search className="w-5 h-5 text-[#246B32] ml-3 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search delicacies (e.g. Pesarattu, Ghee Sambar, Pulihora, Payasam)..."
              className="w-full bg-transparent text-sm text-[#172117] placeholder:text-[#4D574B]/60 focus:outline-none py-1.5"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="p-1.5 rounded-full hover:bg-[#F1EEDF] text-[#4D574B] transition-colors mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-6">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm ${
                  isActive
                    ? "bg-[#246B32] text-white ring-2 ring-[#5B963C] shadow-md scale-105"
                    : "bg-white text-[#172117] hover:bg-[#EBF4E8] border border-[#246B32]/20"
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dietary Tag Badges */}
        {availableTags.length > 0 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            <span className="text-xs text-[#8A6245] font-semibold flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Filter by:
            </span>
            <button
              type="button"
              onClick={() => setActiveTag("all")}
              className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                activeTag === "all"
                  ? "bg-[#C59A45] text-white"
                  : "bg-white text-[#4D574B] border border-[#246B32]/15 hover:border-[#246B32]/40"
              }`}
            >
              All Types
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(activeTag === tag ? "all" : tag)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-[#246B32] text-white"
                    : "bg-white text-[#4D574B] border border-[#246B32]/15 hover:border-[#246B32]/40"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Zero Results State */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/80 rounded-3xl border border-[#246B32]/15 max-w-md mx-auto">
            <ChefHat className="w-12 h-12 text-[#C59A45] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#172117] mb-2">
              No Delicacies Found
            </h3>
            <p className="text-xs sm:text-sm text-[#4D574B] mb-6">
              We couldn&apos;t find any dishes matching &ldquo;{searchQuery}&rdquo;. Try clearing your filters or search keywords.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-6 py-2 rounded-full bg-[#246B32] text-white text-xs font-bold hover:bg-[#1B5226] transition-colors shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Menu Items Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-[#246B32]/15 shadow-sm hover:shadow-xl hover:border-[#C59A45]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Image with Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DB]">
                  <Image
                    src={item.image}
                    alt={item.englishName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123D22]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge if Signature */}
                  {item.isSignature && (
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#246B32] text-white text-[11px] font-bold shadow-md border border-[#5B963C]/40">
                      <Sparkles className="w-3 h-3 text-[#A5D6A7]" />
                      <span>House Special</span>
                    </div>
                  )}

                  {/* Price Pill */}
                  <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full bg-[#123D22]/90 backdrop-blur-md text-[#EBF4E8] text-xs font-bold border border-[#5B963C]/40 shadow-md">
                    {item.pricePlaceholder}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#172117] font-serif mb-2 group-hover:text-[#246B32] transition-colors">
                      {item.englishName}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4D574B] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-[#246B32]/10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#EBF4E8] text-[#246B32] border border-[#246B32]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnote */}
        <div className="mt-14 text-center text-xs text-[#4D574B] max-w-xl mx-auto space-y-1">
          <p className="font-serif italic text-sm text-[#246B32]">
            &ldquo;ఆతిథ్యమే మా సంప్రదాయం — Food prepared with devotion brings supreme contentment.&rdquo;
          </p>
          <p className="text-[11px] text-[#8A6245]">
            Prepared fresh to order. Vegan & Jain alternatives available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}

