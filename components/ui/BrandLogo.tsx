import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "header" | "footer" | "hero" | "compact";
  className?: string;
}

export default function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  const sizeMap = {
    compact: { width: 150, height: 100, imgClass: "h-11 md:h-12" },
    header: { width: 210, height: 140, imgClass: "h-14 sm:h-16 md:h-18" },
    footer: { width: 270, height: 180, imgClass: "h-20 md:h-24" },
    hero: { width: 330, height: 220, imgClass: "h-24 md:h-28" },
  };

  const { width, height, imgClass } = sizeMap[variant] || sizeMap.header;

  return (
    <Link
      href="/"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#246B32] rounded-lg ${className}`}
      aria-label="TRUPTHI – తృప్తి Home"
    >
      <div className="relative flex items-center justify-center bg-transparent">
        <Image
          src="https://res.cloudinary.com/djaaoxrv9/image/upload/v1789108749/trupthi-logo-transparent_po0w30.png"
          alt="TRUPTHI - తృప్తి Pure Organic Food Restaurant Logo"
          width={width}
          height={height}
          priority
          unoptimized
          className={`object-contain w-auto ${imgClass} drop-shadow-[0_4px_12px_rgba(18,61,34,0.12)] transition-all duration-300`}
        />
      </div>
    </Link>
  );
}
