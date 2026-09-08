"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  category: "Purity & Cooking" | "Dining & Traditions" | "Reservations & Events";
}

const faqs: FaqItem[] = [
  {
    question: "Is TRUPTHI a 100% Pure Vegetarian restaurant?",
    answer: "Yes, absolutely. TRUPTHI is exclusively 100% pure vegetarian (శుద్ధ శాకాహార భోజనం). We maintain strict kitchen sanctity with zero cross-contamination, sourcing authentic lentils, bull-driven oils, and farm-fresh produce.",
    category: "Purity & Cooking",
  },
  {
    question: "Do you use artificial colors, chemical preservatives, or cooking soda?",
    answer: "Never. We adhere to sacred culinary traditions where color and taste come solely from heirloom spices, slow simmering, stone-ground masalas, and natural ingredients. We never use MSG, artificial colors, or chemical preservatives.",
    category: "Purity & Cooking",
  },
  {
    question: "What is special about your Banana Leaf Dining (అరిటాకు భోజనం)?",
    answer: "Our signature Bhojanam is served on fresh, organic banana leaves harvested daily. Hot steamed rice, podis, gun-powder, seasonal vegetable vepudu, gutti vankaya, sambar, majjiga pulusu, rasam, payasam, and artisanal ghee are served in the authentic sequential South Indian order.",
    category: "Dining & Traditions",
  },
  {
    question: "Do you accommodate Jain or Satvik (No Onion, No Garlic) dietary preferences?",
    answer: "Yes, we gladly cater to Jain and Satvik dietary requirements. When visiting or reserving a table, please inform our service team, and our master chefs will prepare dedicated meals free of onion, garlic, and root vegetables.",
    category: "Purity & Cooking",
  },
  {
    question: "How do table reservations work for families and large groups?",
    answer: "We warmly welcome family gatherings, celebrations, and festive groups. While walk-ins are always welcomed, we recommend reserving in advance for groups of 6 or more on weekends to ensure immediate seating without waiting.",
    category: "Reservations & Events",
  },
  {
    question: "Do you offer outdoor catering or private banquet feasts?",
    answer: "Yes! TRUPTHI provides bespoke heritage catering for traditional weddings, housewarmings (Gruhapravesam), satyanarayana vratams, and corporate events across Visakhapatnam (Vizag) and surrounding coastal regions. We bring our live banana leaf service, brass ware, and master cooks to your venue.",
    category: "Reservations & Events",
  },

  {
    question: "Is valet parking available at TRUPTHI?",
    answer: "Yes, complimentary valet parking is available for all dining guests during both our afternoon lunch and evening dinner sessions.",
    category: "Dining & Traditions",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Purity & Cooking", "Dining & Traditions", "Reservations & Events"];

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  // Schema.org FAQPage JSON-LD microdata
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-[#246B32]/10">
      {/* Schema.org FAQPage Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative ambient background */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#C59A45]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#246B32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#C59A45]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#172117] font-serif english-heading mb-4">
            Everything You Need to Know
          </h2>

          <p className="text-base text-[#4D574B] max-w-xl mx-auto leading-relaxed">
            Curious about our ingredients, banana leaf dining sessions, or private events? Here are answers to common questions.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[#246B32] text-white shadow-md shadow-[#246B32]/20"
                    : "bg-white text-[#4D574B] border border-[#246B32]/15 hover:border-[#246B32]/40 hover:text-[#172117]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#C59A45]/60 shadow-lg shadow-[#172117]/5"
                    : "bg-white/80 border-[#246B32]/15 hover:border-[#246B32]/35"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#246B32]"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#172117] flex items-center gap-2.5">
                    <Sparkles className={`w-4 h-4 transition-colors flex-shrink-0 ${isOpen ? "text-[#C59A45]" : "text-[#246B32]/40"}`} />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-[#C59A45] text-white rotate-180"
                        : "bg-[#F1EEDF] text-[#246B32]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#4D574B] leading-relaxed border-t border-[#246B32]/10 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom helper card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#246B32]/10 via-[#C59A45]/10 to-[#246B32]/10 border border-[#246B32]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-[#172117] text-base">
              Have a special dietary request or hosting a large gathering?
            </h4>
            <p className="text-xs sm:text-sm text-[#4D574B] mt-1">
              Our culinary team is ready to personalize your dining experience.
            </p>
          </div>
          <a
            href="tel:+919490062627"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#246B32] hover:bg-[#1B5226] text-white text-xs font-bold tracking-wide transition-all shadow-md hover:shadow-lg whitespace-nowrap"
          >
            Call Guest Desk
          </a>
        </div>
      </div>
    </section>
  );
}
