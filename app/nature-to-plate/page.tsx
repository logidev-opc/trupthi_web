import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  StorySection,
  OrganicPromise,
  WhyTrupthi,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "From Nature to Plate | 4-Stage Farm-to-Table Experience",
  description:
    "Explore our 4-stage signature process: organic farm sourcing, desi cow milk, traditional clay pot cooking, and pure banana leaf dining.",
  alternates: {
    canonical: `${siteConfig.url}/nature-to-plate`,
  },
  openGraph: {
    title: "Nature to Plate – TRUPTHI Farm-Fresh Telugu Vegetarian Dining",
    description: "Our authentic four-stage journey from indigenous farmland to sacred banana leaf bhojanam.",
    url: `${siteConfig.url}/nature-to-plate`,
  },
};

export default function NatureToPlatePage() {
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
        name: "From Nature to Plate",
        item: `${siteConfig.url}/nature-to-plate`,
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
        title="From Nature to Plate"
        teluguTitle="ప్రకృతి నుంచి... పళ్లెం వరకు"
        subtitle="Our sacred 4-step farm-to-table journey: directly from nature to your authentic banana leaf feast."
        breadcrumb="From Nature to Plate"
      />
      <StorySection />
      <OrganicPromise />
      <WhyTrupthi />
      <Footer />
    </main>
  );
}

