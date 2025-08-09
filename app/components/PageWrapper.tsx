"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Keyed by pathname so the container re-mounts every route change
  return (
    <div key={pathname} className="animated-text">
      {children}
    </div>
  );
}
