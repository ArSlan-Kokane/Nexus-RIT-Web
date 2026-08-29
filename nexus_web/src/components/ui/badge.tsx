import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "success" | "warning" | "glow";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#14141b] text-zinc-300 border border-[#262635]",
    outline: "border border-zinc-700/60 text-zinc-300 bg-transparent",
    accent: "bg-blue-950/40 text-blue-300 border border-blue-800/50",
    success: "bg-emerald-950/40 text-emerald-300 border border-emerald-800/50",
    warning: "bg-amber-950/40 text-amber-300 border border-amber-800/50",
    glow: "bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.2)]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-mono tracking-tight",
    md: "text-xs px-2.5 py-1 font-mono tracking-tight",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-md uppercase transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
