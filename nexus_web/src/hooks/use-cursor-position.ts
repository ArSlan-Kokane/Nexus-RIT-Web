"use client";

import { useEffect, useState } from "react";
import { CURSOR_THROTTLE_MS, MOBILE_BREAKPOINT } from "@/lib/constants/animation";

export function useCursorPosition() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let enabled = false;
    let animationFrame = 0;
    let lastUpdate = 0;

    const clearCursorPosition = () => {
      document.documentElement.style.removeProperty("--cursor-x");
      document.documentElement.style.removeProperty("--cursor-y");
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!enabled) return;

      const now = performance.now();
      if (now - lastUpdate < CURSOR_THROTTLE_MS) return;
      lastUpdate = now;

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    const updateEnabled = () => {
      const nextEnabled =
        finePointer.matches &&
        !reducedMotion.matches &&
        window.innerWidth >= MOBILE_BREAKPOINT;

      if (nextEnabled === enabled) return;
      enabled = nextEnabled;
      setIsEnabled(nextEnabled);

      if (nextEnabled) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
      } else {
        window.removeEventListener("pointermove", handlePointerMove);
        clearCursorPosition();
      }
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);
    window.addEventListener("resize", updateEnabled, { passive: true });

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
      window.removeEventListener("resize", updateEnabled);
      clearCursorPosition();
    };
  }, []);

  return { isEnabled };
}
