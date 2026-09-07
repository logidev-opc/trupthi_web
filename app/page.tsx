import { Header, Footer } from "@/components/layout";
import {
  Hero,
  IntroSection,
  StorySection,
  OrganicPromise,
  FeaturedMeal,
  FeaturedMenu,
  HeritageSection,
  SignatureDishes,
  WhyTrupthi,
  Gallery,
  Testimonials,
  FaqSection,
  VisitSection,
} from "@/components/sections";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#F8F7EE] text-[#172117] flex flex-col selection:bg-[#246B32]/25">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Brand Intro / The Trupthi Experience */}
      <IntroSection />

      {/* Our Story: From Nature to Plate */}
      <StorySection />

      {/* Organic Promise (Dark Wood Section) */}
      <OrganicPromise />

      {/* Signature Andhra Banana Leaf Feast Spotlight */}
      <FeaturedMeal />

      {/* Full Categorized Menu */}
      <FeaturedMenu />

      {/* Telugu Heritage & Cooking Traditions */}
      <HeritageSection />

      {/* Signature Specialties */}
      <SignatureDishes />

      {/* Why TRUPTHI Core Values */}
      <WhyTrupthi />

      {/* Editorial Masonry Gallery */}
      <Gallery />

      {/* Guest Reviews & Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions (Schema.org Microdata) */}
      <FaqSection />

      {/* Location, Contact, Hours & Map Preview */}
      <VisitSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

