"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top smoothly upon navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div key={pathname} className="animate-page-enter min-h-full w-full">
      {children}
    </div>
  );
}
