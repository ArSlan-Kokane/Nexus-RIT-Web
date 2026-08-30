"use client";

import { useCursorPosition } from "@/hooks/use-cursor-position";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  decay: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

const PARTICLE_COLORS = ["#dbeafe", "#93c5fd", "#60a5fa", "#a7f3d0"];

function drawSpark(ctx: CanvasRenderingContext2D, particle: Particle) {
  const alpha = Math.max(0, particle.life);
  const size = particle.size * (0.7 + particle.life * 0.3);

  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation);
  ctx.globalAlpha = alpha;
  ctx.shadowBlur = size * 3;
  ctx.shadowColor = particle.color;
  ctx.fillStyle = particle.color;
  ctx.beginPath();
  ctx.moveTo(0, -size * 1.8);
  ctx.lineTo(size * 0.55, -size * 0.55);
  ctx.lineTo(size * 1.8, 0);
  ctx.lineTo(size * 0.55, size * 0.55);
  ctx.lineTo(0, size * 1.8);
  ctx.lineTo(-size * 0.55, size * 0.55);
  ctx.lineTo(-size * 1.8, 0);
  ctx.lineTo(-size * 0.55, -size * 0.55);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function CursorSparkles() {
  const { isEnabled } = useCursorPosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: Particle[] = [];
    let animationFrame = 0;
    let lastPoint = { x: 0, y: 0 };
    let lastEmitAt = 0;
    let devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * devicePixelRatio);
      canvas.height = Math.floor(window.innerHeight * devicePixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const emit = (x: number, y: number, count: number, force = 1) => {
      for (let index = 0; index < count; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.25 + Math.random() * 0.9) * force;
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.15,
          life: 0.72 + Math.random() * 0.28,
          decay: 0.018 + Math.random() * 0.018,
          size: 1.1 + Math.random() * 1.8,
          rotation: Math.random() * Math.PI,
          rotationSpeed: (Math.random() - 0.5) * 0.08,
          color:
            PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        });
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const point = { x: event.clientX, y: event.clientY };
      const distance = Math.hypot(point.x - lastPoint.x, point.y - lastPoint.y);
      const now = performance.now();

      if (distance > 2 && now - lastEmitAt > 24) {
        emit(point.x, point.y, distance > 32 ? 2 : 1, Math.min(distance / 18, 2));
        lastEmitAt = now;
      }

      lastPoint = point;
    };

    const handlePointerDown = (event: PointerEvent) => {
      emit(event.clientX, event.clientY, 10, 1.8);
    };

    const render = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy = particle.vy * 0.985 + 0.012;
        particle.rotation += particle.rotationSpeed;
        particle.life -= particle.decay;
        drawSpark(context, particle);

        if (particle.life <= 0) {
          particles.splice(index, 1);
        }
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      particles.length = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      <div className="ambient-cursor-glow" aria-hidden="true" />
      <div className="cursor-sparkle-field" aria-hidden="true">
        <span className="cursor-sparkle-ring" />
        <span className="cursor-sparkle-orb" />
        <span className="cursor-sparkle-crosshair" />
        <span className="cursor-twinkle cursor-twinkle-one" />
        <span className="cursor-twinkle cursor-twinkle-two" />
        <span className="cursor-twinkle cursor-twinkle-three" />
        <span className="cursor-twinkle cursor-twinkle-four" />
      </div>
      <canvas ref={canvasRef} className="cursor-sparkle-canvas" aria-hidden="true" />
    </>
  );
}
