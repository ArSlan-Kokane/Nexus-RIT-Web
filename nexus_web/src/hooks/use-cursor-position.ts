"use client";

import { useEffect, useState } from "react";
import { CURSOR_THROTTLE_MS, MOBILE_BREAKPOINT } from "@/lib/constants/animation";

export function useCursorPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse) and not reduced motion
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    const updateEnabled = () => {
      const enabled = finePointer.matches && !reducedMotion.matches && !isMobile;
      setIsEnabled(enabled);
    };

    updateEnabled();

    let lastUpdate = 0;
    let rafId: number;

    const handlePointerMove = (event: PointerEvent) => {
      if (!isEnabled) return;

      const now = performance.now();
      if (now - lastUpdate < CURSOR_THROTTLE_MS) return;
      lastUpdate = now;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setPosition({ x: event.clientX, y: event.clientY });
        
        // Update CSS custom properties for ambient glow
        document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
      });
    };

    if (isEnabled) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    const handleResize = () => {
      updateEnabled();
    };

    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    window.addEventListener("resize", handleResize);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      window.removeEventListener("resize", handleResize);
      
      // Clean up CSS custom properties
      document.documentElement.style.removeProperty('--cursor-x');
      document.documentElement.style.removeProperty('--cursor-y');
    };
  }, [isEnabled]);

  return { position, isEnabled };
}