import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  StorySection,
  IntroSection,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Story | Handcrafted Culinary Heritage & Philosophy",
  description:
    "Discover the roots of TRUPTHI: our passion for authentic Telugu vegetarian heritage, pure desi cow ghee, and soulful dining from nature to plate.",
  alternates: {
    canonical: `${siteConfig.url}/story`,
  },
  openGraph: {
    title: "The TRUPTHI Story – Preserving Ancient Telugu Cooking Traditions",
    description: "Born from a reverence for natural, pure dining and sacred South Indian hospitality.",
    url: `${siteConfig.url}/story`,
  },
};

export default function StoryPage() {
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
        name: "Our Story",
        item: `${siteConfig.url}/story`,
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
        title="Our Story & Heritage"
        teluguTitle="మా పవిత్ర కథ & సాంప్రదాయం"
        subtitle="Born from a deep reverence for authentic Telugu gastronomy, pure cow ghee, and ancient earthen culinary traditions."
        breadcrumb="Our Story"
      />
      <StorySection />
      <IntroSection />
      <Footer />
    </main>
  );
}

