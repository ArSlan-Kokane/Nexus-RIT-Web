"use client";

import { useCursorPosition } from "@/hooks/use-cursor-position";

export function CursorSparkles() {
  const { isEnabled } = useCursorPosition();

  if (!isEnabled) return null;

  return <div className="ambient-cursor-glow" aria-hidden="true" />;
}
