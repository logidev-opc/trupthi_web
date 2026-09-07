import Image from "next/image";
import { Camera } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      src: "/images/hero-bhojanam.jpg",
      title: "Authentic Andhra Banana Leaf Feast",
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[16/10] md:aspect-auto md:h-full min-h-[300px]",
    },
    {
      src: "/images/gallery/restaurant-ambience.jpg",
      title: "Heritage Dining Ambience & Live Greenery",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9] min-h-[220px]",
    },
    {
      src: "/images/heritage-cooking.jpg",
      title: "Traditional Clay Pot Slow Cooking",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3] min-h-[220px]",
    },
    {
      src: "/images/farm-fresh-story.jpg",
      title: "Fresh Harvest from Organic Farms",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3] min-h-[220px]",
    },
    {
      src: "/images/menu/traditional-sweets.jpg",
      title: "Pootharekulu, Bobbatlu & Filter Coffee",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9] min-h-[220px]",
    },
    {
      src: "/images/menu/gutti-vankaya-dish.jpg",
      title: "Gutti Vankaya in Handcrafted Brass Vessel",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9] min-h-[220px]",
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8F7EE] bg-natural-texture relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E8] border border-[#246B32]/25 text-[#246B32] text-xs font-bold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Glimpse</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#172117] font-serif english-heading mb-3">
            The TRUPTHI Gallery
          </h2>

          <p className="text-sm text-[#4D574B]">
            An inside look at our peaceful green ambience, farm-fresh ingredients, and traditional preparation.
          </p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#246B32]/15 ${item.span} ${item.aspect} bg-[#EAE7DB]`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123D22]/85 via-[#123D22]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-semibold text-white drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
