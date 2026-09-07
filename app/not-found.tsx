import Link from "next/link";
import { UtensilsCrossed, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F7EE] bg-natural-texture flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-lg w-full p-8 sm:p-12 rounded-3xl bg-white border border-[#246B32]/20 shadow-xl space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#EBF4E8] text-[#246B32] flex items-center justify-center mx-auto shadow-inner">
          <span className="text-3xl font-black font-serif">404</span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-[#5B963C] font-bold">
            TRUPTHI (తృప్తి)
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#172117] mt-2">
            Page Not Found
          </h1>
          <p className="text-lg font-serif text-[#246B32] mt-1">
            ఈ పేజీ అందుబాటులో లేదు
          </p>
          <p className="text-xs sm:text-sm text-[#4D574B] mt-3 leading-relaxed">
            The page you are looking for might have been moved or is temporarily unavailable. Let&apos;s get you back to delicious Telugu food.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#246B32] hover:bg-[#123D22] text-white transition-colors shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#EBF4E8] hover:bg-[#246B32]/15 text-[#246B32] transition-colors border border-[#246B32]/20"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
