"use client";

import { useEffect, useState } from "react";

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const MAX_PARTICLES = 10;

export function CursorSparkles() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<SparkParticle[]>([]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateEnabled = () => {
      const enabled = finePointer.matches && !reducedMotion.matches;
      setIsEnabled(enabled);
      document.documentElement.classList.toggle("cursor-sparkles-enabled", enabled);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      document.documentElement.classList.remove("cursor-sparkles-enabled");
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let frameId = 0;
    let particleId = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const nextCursor = { x: event.clientX, y: event.clientY };
        setCursor(nextCursor);
        setParticles((current) => [
          ...current.slice(-(MAX_PARTICLES - 1)),
          {
            id: particleId++,
            ...nextCursor,
            size: 3 + Math.random() * 4,
            delay: Math.random() * 80,
          },
        ]);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="cursor-sparkles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="cursor-spark"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}ms`,
          }}
        />
      ))}
      <span className="cursor-core" style={{ left: cursor.x, top: cursor.y }} />
    </div>
  );
}
