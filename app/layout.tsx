import type { Metadata } from "next";
import { Noto_Serif_Telugu, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Preloader, ScrollToTop } from "@/components/layout";
import { siteConfig } from "@/config/site";
import "./globals.css";

const teluguFont = Noto_Serif_Telugu({
  weight: ["400", "600", "700"],
  subsets: ["telugu"],
  variable: "--font-telugu",
  display: "swap",
});

const serifFont = Playfair_Display({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-serif-heading",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TRUPTHI (తృప్తి) – Pure Organic Food | Traditional Telugu Vegetarian Restaurant",
    template: "%s | TRUPTHI Traditional Telugu Restaurant",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "TRUPTHI Pure Organic Food Restaurant", url: siteConfig.url }],
  creator: "TRUPTHI",
  publisher: "TRUPTHI",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "TRUPTHI (తృప్తి) – Authentic Telugu Vegetarian Restaurant | Visakhapatnam (Vizag)",
    description: "Savor pure cow bilona ghee, stone-ground masalas, and traditional banana leaf bhojanam in Visakhapatnam (Vizag). 100% pure vegetarian dining.",
    url: siteConfig.url,
    siteName: "TRUPTHI Pure Organic Food",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "TRUPTHI Traditional Telugu Vegetarian Banana Leaf Meal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRUPTHI (తృప్తి) – Pure Organic Telugu Vegetarian Dining | Vizag",
    description: "Pure vegetarian South Indian food prepared with pure cow ghee and heirloom spices in Visakhapatnam (Vizag).",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", type: "image/png" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  other: {
    "geo.region": "IN-AP",
    "geo.placename": "Visakhapatnam",
    "geo.position": `${siteConfig.coordinates.latitude};${siteConfig.coordinates.longitude}`,
    "ICBM": `${siteConfig.coordinates.latitude}, ${siteConfig.coordinates.longitude}`,
    "theme-color": "#172117",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${siteConfig.url}/#restaurant`,
        "name": "TRUPTHI Pure Organic Food (తృప్తి)",
        "alternateName": "TRUPTHI Telugu Vegetarian Restaurant Vizag",
        "url": siteConfig.url,
        "image": `${siteConfig.url}${siteConfig.ogImage}`,
        "logo": `${siteConfig.url}${siteConfig.logo}`,
        "servesCuisine": [
          "Telugu",
          "Andhra",
          "South Indian",
          "Pure Vegetarian",
          "Satvik",
          "Organic"
        ],
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, Google Pay, PhonePe",
        "description": siteConfig.description,
        "hasMenu": `${siteConfig.url}/menu`,
        "telephone": siteConfig.contact.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.contact.address,
          "addressLocality": "Yendada, Endada",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530045",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": siteConfig.coordinates.latitude,
          "longitude": siteConfig.coordinates.longitude,
        },

        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "08:00",
            "closes": "23:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2480",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": "TRUPTHI",
        "publisher": {
          "@id": `${siteConfig.url}/#restaurant`,
        },
      },
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${teluguFont.variable} ${serifFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F7EE] text-[#172117] font-sans antialiased selection:bg-[#246B32]/25 selection:text-[#172117]">
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

