"use client";

import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;  // React fragment to wrap children properly
}
