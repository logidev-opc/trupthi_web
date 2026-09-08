import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageBanner } from "@/components/ui";
import {
  VisitSection,
  WhyTrupthi,
} from "@/components/sections";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Visit Us & Reservations | Location, Timings & Directions | Vizag",
  description:
    "Plan your visit to TRUPTHI Restaurant in Yendada, Endada, Visakhapatnam (Vizag). Timings, table reservations, directions, and pure vegetarian Telugu dining.",
  alternates: {
    canonical: `${siteConfig.url}/visit`,
  },
  openGraph: {
    title: "Visit TRUPTHI Vizag – Location, Hours & Table Booking",
    description: "Q9H3+963 Petrol Bunk, Yendada, Endada, Visakhapatnam. Pure vegetarian banana leaf meals, morning tiffins, and valet parking.",
    url: `${siteConfig.url}/visit`,
  },
};


export default function VisitPage() {
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
        name: "Visit Us",
        item: `${siteConfig.url}/visit`,
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
        title="Visit TRUPTHI"
        teluguTitle="రండి... మా ఆతిథ్యాన్ని స్వీకరించండి"
        subtitle="Experience peaceful dining, authentic Telugu vegetarian flavors, and pure desi cow ghee feasts with your family."
        breadcrumb="Visit Us"
      />
      <VisitSection />
      <WhyTrupthi />
      <Footer />
    </main>
  );
}

