import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  HeritageSection,
  SignatureDishes,
  StorySection,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Telugu Heritage & Cooking Traditions | Clay Pots & Heirloom Recipes",
  description:
    "Delve into the heirloom cooking techniques of Telugu cuisine: slow clay pot cooking, stone-ground masalas, and sacred guest hospitality.",
  alternates: {
    canonical: `${siteConfig.url}/heritage`,
  },
  openGraph: {
    title: "Telugu Culinary Heritage & Ancient Traditions – TRUPTHI",
    description: "Centuries-old recipes, earthenware cooking, and traditional Andhra hospitality.",
    url: `${siteConfig.url}/heritage`,
  },
};

export default function HeritagePage() {
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
        name: "Telugu Heritage",
        item: `${siteConfig.url}/heritage`,
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
        title="Telugu Food Heritage"
        teluguTitle="మన సంప్రదాయం & వంటల సంస్కృతి"
        subtitle="Honoring centuries of culinary artistry: earthenware cooking, hand-pounded masalas, and warmhearted Telugu hospitality."
        breadcrumb="Telugu Heritage"
      />
      <HeritageSection />
      <SignatureDishes />
      <StorySection />
      <Footer />
    </main>
  );
}

