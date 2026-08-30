"use client";

import { useLayoutEffect, useRef } from "react";

export function SiteHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${header.offsetHeight}px`
      );
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      {children}
    </header>
  );
}
