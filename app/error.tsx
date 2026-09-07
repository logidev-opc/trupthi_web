"use client";

import { useEffect } from "react";
import Link from "next/link";
import { UtensilsCrossed, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error internally without exposing sensitive details to the client UI
    console.error("Runtime Exception caught in App Boundary:", error.digest || error.message);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F8F7EE] bg-natural-texture flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white border border-[#246B32]/20 shadow-xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EBF4E8] text-[#246B32] flex items-center justify-center mx-auto shadow-inner">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-[#5B963C] font-bold">
            TRUPTHI (తృప్తి)
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#172117] mt-2">
            Something went wrong
          </h1>
          <p className="text-base font-serif text-[#246B32] mt-1">
            ఏదో సాంకేతిక సమస్య ఏర్పడింది
          </p>
          <p className="text-xs sm:text-sm text-[#4D574B] mt-3 leading-relaxed">
            We apologize for the inconvenience. Please try refreshing the page or returning to our main menu.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#246B32] hover:bg-[#123D22] text-white transition-colors cursor-pointer shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#EBF4E8] hover:bg-[#246B32]/15 text-[#246B32] transition-colors border border-[#246B32]/20"
          >
            <Home className="w-4 h-4" />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
