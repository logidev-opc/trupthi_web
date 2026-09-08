import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  OrganicPromise,
  WhyTrupthi,
  SignatureDishes,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Natural Sourcing & Purity | 100% Desi Cow Ghee & Heirloom Grains",
  description:
    "Learn about our honest ingredients: pure bilona desi cow ghee, farm-fresh local vegetables, native unpolished grains, and bull-driven oils.",
  alternates: {
    canonical: `${siteConfig.url}/ingredients`,
  },
  openGraph: {
    title: "Pure Sourcing & Ghee Traditions – TRUPTHI Restaurant",
    description: "Zero chemical preservatives, stone-ground masalas, bull-driven oils, and farm fresh vegetables.",
    url: `${siteConfig.url}/ingredients`,
  },
};

export default function IngredientsPage() {
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
        name: "Natural Sourcing",
        item: `${siteConfig.url}/ingredients`,
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
        title="Our Natural Ingredients"
        teluguTitle="స్వచ్ఛమైన మరియు సహజ పదార్థాలు"
        subtitle="Every dish is crafted with pure desi cow ghee, bull-driven oils, native grains, and zero artificial colors or chemicals."
        breadcrumb="Natural Sourcing"
      />
      <OrganicPromise />
      <WhyTrupthi />
      <SignatureDishes />
      <Footer />
    </main>
  );
}

