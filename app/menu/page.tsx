import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  FeaturedMeal,
  FeaturedMenu,
  SignatureDishes,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Menu & Delicacies | Traditional Telugu Vegetarian Cuisine",
  description:
    "Explore our authentic Telugu vegetarian menu: Andhra Banana Leaf Bhojanam, Ghee Roast Dosa, Pesarattu, Rayalaseema Ragi Sangati, Gongura Pappu, and traditional sweets.",
  alternates: {
    canonical: `${siteConfig.url}/menu`,
  },
  openGraph: {
    title: "TRUPTHI Menu – Authentic South Indian & Telugu Delicacies",
    description: "Godavari bhojanam, MLA pesarattu, avakaya annam, and pure ghee sweets made fresh daily.",
    url: `${siteConfig.url}/menu`,
  },
};

export default function MenuPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Menu & Delicacies",
        item: `${siteConfig.url}/menu`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F7EE] text-[#172117] flex flex-col selection:bg-[#246B32]/25">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <PageBanner
        title="Our Complete Menu"
        teluguTitle="తృప్తి పవిత్ర వంటకాలు & రుచులు"
        subtitle="Slow-cooked in clay pots, made with pure desi cow ghee, cold-pressed oils, and farm-fresh organic ingredients."
        breadcrumb="Menu"
      />
      {/* Andhra Banana Leaf Feast Spotlight */}
      <FeaturedMeal />
      {/* Full Categorized Menu with Filters & Search */}
      <FeaturedMenu />
      {/* Signature Specialties */}
      <SignatureDishes />
      <Footer />
    </main>
  );
}

