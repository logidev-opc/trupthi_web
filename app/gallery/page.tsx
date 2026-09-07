import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  Gallery,
  Testimonials,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Photo Gallery | Ambience, Feasts & Fresh Harvest",
  description:
    "Explore the visual journey of TRUPTHI: our serene dining ambience, farm-fresh produce, and authentic Telugu culinary preparations.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "TRUPTHI Gallery – Ambience & Visual Gastronomy | Vizag",
    description: "Serene dining spaces, traditional brass ware, and steaming banana leaf meals in Visakhapatnam (Vizag).",
    url: `${siteConfig.url}/gallery`,
  },
};


export default function GalleryPage() {
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
        name: "Photo Gallery",
        item: `${siteConfig.url}/gallery`,
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
        title="Visual Showcase"
        teluguTitle="చిత్రమాలిక & ప్రశాంత వాతావరణం"
        subtitle="A visual celebration of authentic Andhra meals, organic produce, rustic ambience, and sacred kitchen heritage."
        breadcrumb="Gallery"
      />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}

