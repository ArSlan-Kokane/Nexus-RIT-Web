"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const NAV_GROUPS = [
  {
    label: "CORE DIRECTORY",
    items: [
      { title: "About Charter", href: "/about", badge: undefined },
      { title: "Leadership & Directorate", href: "/team", badge: undefined },
      { title: "Project Index", href: "/projects", badge: "Engineered" },
      { title: "Hackathons Hub", href: "/hackathons", badge: "SIH Ready" },
    ],
  },
  {
    label: "KNOWLEDGE & HORIZONS",
    items: [
      { title: "Technical Insights", href: "/insights", badge: undefined },
      { title: "Developer Toolkits", href: "/resources", badge: undefined },
      { title: "Event Horizon", href: "/events", badge: "Upcoming" },
      { title: "Alumni Lineage", href: "/alumni", badge: undefined },
    ],
  },
  {
    label: "INSTITUTIONAL LIAISON",
    items: [
      { title: "Direct Contact & HQ", href: "/contact", badge: undefined },
      {
        title: "Join NEXUS Cohort",
        href: "/join",
        badge: siteConfig.recruitment.isOpen ? "Recruiting" : "Closed",
      },
    ],
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const drawerVariants: Variants = {
    hidden: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusFirstItem = () =>
      menuRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      );
      const first = focusableElements[0];
      const last = focusableElements.at(-1);

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    focusFirstItem();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        onClick={() => setIsOpen((open) => !open)}
        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed inset-0 top-16 z-50 bg-[#050507]/95 backdrop-blur-xl border-t border-[#1c1c27] flex flex-col p-6 overflow-y-auto"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="space-y-6 pb-6">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="space-y-2">
                  <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-3">
                    {group.label}
                  </div>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors",
                            isActive
                              ? "bg-purple-950/50 text-purple-300 border border-purple-800/40"
                              : "text-zinc-300 hover:text-white hover:bg-[#14141b]"
                          )}
                          data-interactive="true"
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-[#1c1c27] space-y-4">
              <Button
                href="/join"
                onClick={() => setIsOpen(false)}
                variant="primary"
                className="w-full justify-center h-12 text-base shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                Join NEXUS Cohort
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>

              <div className="text-center pt-2">
                <p className="text-xs font-mono text-zinc-400">
                  NEXUS — Innovation &amp; Leadership Collective
                </p>
                <p className="text-[11px] text-zinc-500 mt-0.5 font-mono">
                  Rajarambapu Institute of Technology (RIT)
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
