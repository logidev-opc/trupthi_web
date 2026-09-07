import Link from "next/link";
import { ChevronRight, Home, Sprout } from "lucide-react";

interface PageBannerProps {
  title: string;
  teluguTitle: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageBanner({
  title,
  teluguTitle,
  subtitle,
  breadcrumb,
}: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 bg-[#123D22] text-[#F8F7EE] overflow-hidden bg-dark-forest-texture border-b border-[#5B963C]/30">
      {/* Decorative background ambient glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#246B32]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5B963C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#D8CBB8] mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-[#A5D6A7] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#5B963C]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" />
          <span className="text-[#A5D6A7] font-medium">{breadcrumb}</span>
        </nav>

        {/* Telugu Sub-heading / Sacred Tag */}
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#A5D6A7] font-semibold mb-2">
          <Sprout className="w-4 h-4 text-[#5B963C]" />
          <span className="font-serif">{teluguTitle}</span>
        </div>

        {/* English Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-sm">
          {title}
        </h1>

        {/* Delicate decorative divider */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#5B963C]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#A5D6A7]" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#5B963C]" />
        </div>

        {subtitle && (
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D8CBB8] font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
