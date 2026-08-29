import { cn } from "@/lib/utils";
import React from "react";

export function Card({
  className,
  children,
  hoverable = false,
  glow = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  hoverable?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl bg-[#0c0c10] border border-[#1c1c27] p-6 text-zinc-100 transition-all duration-300 relative overflow-hidden",
        hoverable &&
          "hover:border-[#353549] hover:bg-[#111117] hover:shadow-lg hover:shadow-black/50 hover:-translate-y-0.5",
        glow && "tech-border-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-zinc-400 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-[#1c1c27]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
