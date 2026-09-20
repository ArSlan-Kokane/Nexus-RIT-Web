"use client";

import { useEffect, useRef, useState } from "react";
import { useCursorPosition } from "@/hooks/use-cursor-position";

interface IonParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  color: string;
}

const NEON_COLORS = [
  "#00f0ff", // Electric Neon Cyan
  "#38bdf8", // Sky Plasma
  "#a855f7", // Neon Purple
  "#c084fc", // Radiant Violet
  "#ffffff", // Core White
];

export function CursorSparkles() {
  const { isEnabled } = useCursorPosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    const arrow = arrowRef.current;
    if (!canvas || !arrow) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame = 0;
    const particles: IonParticle[] = [];

    let currentX = -100;
    let currentY = -100;
    let prevX = -100;
    let prevY = -100;
    let lastEmitTime = 0;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const emitParticles = (x: number, y: number, count: number, speedMultiplier = 1) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.5 + Math.random() * 1.6) * speedMultiplier;
        particles.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0.82 + Math.random() * 0.18,
          decay: 0.025 + Math.random() * 0.018,
          size: 1.8 + Math.random() * 2.2,
          color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        });
      }
    };

    const emitRadialBurst = (x: number, y: number, count = 10) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = 2.0 + Math.random() * 2.8;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.05 + Math.random() * 0.03,
          size: 1.5 + Math.random() * 2.0,
          color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;

      // Position the glowing neon pointer with its apex locked precisely at (clientX, clientY)
      arrow.style.opacity = "1";
      arrow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Check if hovering interactive element (for enhanced neon illumination only, NO position shift)
      const target = e.target as HTMLElement | null;
      if (target) {
        const isElInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input, select, textarea, [data-interactive="true"]'
          )
        );
        setIsInteractive(isElInteractive);
      }

      // Emit subtle particles on movement
      if (prevX > 0 && prevY > 0) {
        const dist = Math.hypot(currentX - prevX, currentY - prevY);
        const now = performance.now();
        if (dist > 3 && now - lastEmitTime > 16) {
          // Emit from trailing tail of arrow
          emitParticles(currentX + 7, currentY + 9, dist > 14 ? 3 : 2, Math.min(dist / 12, 2));
          lastEmitTime = now;
        }
      }

      prevX = currentX;
      prevY = currentY;
    };

    const handlePointerDown = (e: PointerEvent) => {
      emitRadialBurst(e.clientX, e.clientY, 10);
    };

    const handleMouseLeave = () => {
      arrow.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      arrow.style.opacity = "1";
    };

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 14;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    animFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      particles.length = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Canvas particle trail following pointer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[99998] pointer-events-none mix-blend-screen"
        aria-hidden="true"
      />

      {/* The Rock-Solid Neon Pointer (Zero Sideways Drift) */}
      <div
        ref={arrowRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none will-change-transform opacity-0 transition-[filter,opacity] duration-150"
        style={{
          transformOrigin: "0 0",
          filter: isInteractive
            ? "drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 7px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 13px rgba(255, 255, 255, 0.7))"
             : "drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 6px rgba(255, 255, 255, 0.85))",
        }}
        aria-hidden="true"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "visible" }}
        >
          {/* Small glowing white triangle anchored at the pointer hotspot. */}
          <path
            d="M0 0L10.5 4.7L4.7 10.5L0 0Z"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="0.7"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
