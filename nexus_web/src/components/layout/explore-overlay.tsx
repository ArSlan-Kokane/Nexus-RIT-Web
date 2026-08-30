"use client";

import { siteConfig } from "@/data/site-config";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  FolderGit2,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExploreOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function ExploreOverlay({ isOpen, onClose, triggerRef }: ExploreOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;
      const focusableElements = Array.from(
        overlayRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      );
      const first = focusableElements[0];
      const last = focusableElements.at(-1);

      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    overlayRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const categories = [
    {
      number: "01",
      title: "The Collective",
      links: [
        {
          title: "About NEXUS",
          href: "/about",
          desc: "Our mission, three tenets, and RIT institutional charter.",
          icon: ShieldCheck,
        },
        {
          title: "Leadership Board",
          href: "/team",
          desc: "Meet the directors and leads across the 5 core divisions.",
          icon: Users2,
        },
        {
          title: "Alumni Network",
          href: "/alumni",
          desc: "Founding class and past directors building in industry.",
          icon: GraduationCap,
        },
      ],
    },
    {
      number: "02",
      title: "Initiatives & Sprints",
      links: [
        {
          title: "Hackathon Support Hub",
          href: "/hackathons",
          desc: "National hackathon acceleration, SIH guidance & mentorship.",
          icon: Trophy,
        },
        {
          title: "Projects Showcase",
          href: "/projects",
          desc: "Open-source software, IoT hardware, and AI platforms.",
          icon: FolderGit2,
        },
        {
          title: "Events & Workshops",
          href: "/events",
          desc: "Hands-on bootcamps, technical keynotes, and sprint archives.",
          icon: Calendar,
        },
      ],
    },
    {
      number: "03",
      title: "Engineering Knowledge",
      links: [
        {
          title: "Technical Insights",
          href: "/insights",
          desc: "Architectural write-ups and student leadership essays.",
          icon: BookOpen,
        },
        {
          title: "Developer Toolkits",
          href: "/resources",
          desc: "Curated system design roadmaps and hackathon starter kits.",
          icon: Terminal,
        },
      ],
    },
    {
      number: "04",
      title: "Outreach & Access",
      links: [
        {
          title: siteConfig.recruitment.isOpen
            ? "Spring 2026 Recruitment"
            : "Recruitment Updates",
          href: "/join",
          desc: "Apply to join the collective across our 5 divisions.",
          icon: Sparkles,
          badge: siteConfig.recruitment.isOpen ? "Active" : "Closed",
        },
        {
          title: "Campus Location & Inquiries",
          href: "/contact",
          desc: "RIT coordinates, official channels, and faculty details.",
          icon: HeartHandshake,
        },
      ],
    },
  ];

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Explore directory"
        className="fixed inset-0 z-50 bg-[#050507]/95 backdrop-blur-2xl overflow-y-auto"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
      <div className="min-h-screen flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overlay Top Bar */}
        <div className="flex items-center justify-between border-b border-[#1c1c27] pb-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center">
              <Image
                src="/images/nexus-official-mark.jpg"
                alt="NEXUS"
                width={26}
                height={26}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-white tracking-wider">NEXUS</span>
              <span className="text-zinc-600 font-mono">/</span>
              <span className="text-xs font-mono text-zinc-400">NAVIGATION DIRECTORY</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-center gap-2 text-xs font-mono"
            aria-label="Close menu"
          >
            <span>ESC</span>
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 4-Column Editorial Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {categories.map((category) => (
            <div key={category.number} className="space-y-6">
              <div className="flex items-center gap-2 border-b border-[#1c1c27] pb-3">
                <span className="text-xs font-mono text-blue-400 font-semibold">{category.number}</span>
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-300 font-bold">
                  {category.title}
                </h3>
              </div>

              <motion.div 
                className="space-y-3"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {category.links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      variants={linkVariants}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group block p-3.5 rounded-xl bg-[#09090d] border border-[#1c1c27] hover:border-zinc-700 hover:bg-[#121218] transition-all"
                        data-interactive="true"
                      >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {link.title}
                            </span>
                            {link.badge && (
                              <span className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                            {link.desc}
                          </p>
                        </div>
                      </div>
                    </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-auto pt-8 border-t border-[#1c1c27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-zinc-400 font-semibold">NEXUS</span>
            <span>•</span>
            <span>Rajarambapu Institute of Technology (RIT)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={siteConfig.contact.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              WhatsApp Hub <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </AnimatePresence>
  );
}
