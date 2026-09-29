"use client";

import { useEffect, useRef } from "react";

interface TapParticle {
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

export function MobileSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame = 0;
    const particles: TapParticle[] = [];

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const emitTapBurst = (x: number, y: number, count = 15) => {
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 2.5 + Math.random() * 3.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.04 + Math.random() * 0.03,
          size: 2 + Math.random() * 2.5,
          color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        });
      }
    };

    const handleTap = (e: PointerEvent) => {
      emitTapBurst(e.clientX, e.clientY, 15);
    };

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 16;
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
    window.addEventListener("pointerdown", handleTap, { passive: true });
    animFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", handleTap);
      particles.length = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99997] pointer-events-none mix-blend-screen lg:hidden"
      aria-hidden="true"
    />
  );
}
