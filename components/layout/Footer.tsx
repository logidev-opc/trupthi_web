import Link from "next/link";
import BrandLogo from "@/components/ui/BrandLogo";
import { restaurantData } from "@/data/restaurant";
import { footerQuickLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock, Heart, Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C2214] text-[#D8CBB8] pt-16 pb-12 border-t border-[#5B963C]/30 relative overflow-hidden bg-dark-forest-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-[#A5D6A7] font-bold flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5" />
                Pure Organic Food Restaurant
              </p>
              <p className="text-sm font-serif font-bold text-[#F8F7EE] mt-1">
                {restaurantData.teluguSubtitle}
              </p>
            </div>

            <p className="text-xs text-[#B8C2B6] leading-relaxed max-w-sm">
              Celebrating traditional Telugu vegetarian gastronomy with pure desi cow ghee, farm-fresh organic ingredients, and authentic sacred hospitality.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#A5D6A7] mb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#F8F7EE] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Dining Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#A5D6A7] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#5B963C]" />
              Opening Hours
            </h3>
            <div className="space-y-2.5 text-xs text-[#D8CBB8]">
              <div>
                <p className="font-semibold text-white">Mon – Fri:</p>
                <p>{siteConfig.openingHours.weekdays}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sat – Sun & Festive Days:</p>
                <p>{siteConfig.openingHours.weekends}</p>
              </div>
              <p className="text-[11px] text-[#A5D6A7] pt-1">
                Banana Leaf Feast served daily from {siteConfig.openingHours.feastLunch} & {siteConfig.openingHours.feastDinner}
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#A5D6A7] mb-2">
              Contact & Social
            </h3>
            <div className="space-y-2 text-xs text-[#D8CBB8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A5D6A7] shrink-0 mt-0.5" />
                <span>{restaurantData.addressPlaceholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A5D6A7] shrink-0" />
                <span>{restaurantData.phonePlaceholder}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A5D6A7] shrink-0" />
                <span>{restaurantData.emailPlaceholder}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {restaurantData.socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-[#246B32] border border-white/10 text-xs text-[#F8F7EE] transition-colors"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9EABA0] gap-4">
          <p>© 2026 TRUPTHI (తృప్తి). All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with devotion for</span>
            <span className="text-[#A5D6A7] font-semibold">Telugu Food Heritage</span>
            <Heart className="w-3.5 h-3.5 text-[#5B963C] fill-current inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
