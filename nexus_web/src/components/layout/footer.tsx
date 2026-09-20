import { SocialLinks } from "@/components/common/social-links";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-[#1c1c27] bg-[#07070a] text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5 flex items-center justify-center transition-all group-hover:border-blue-500/50">
                  <Image
                    src="/images/nexus-official-mark.jpg"
                    alt="NEXUS"
                    width={26}
                    height={26}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-lg text-white tracking-wider">NEXUS</span>
                  <span className="block text-[11px] font-mono text-zinc-500">
                    Innovation & Leadership
                  </span>
                </div>
              </Link>

              <div className="h-6 w-[1px] bg-zinc-800 mx-1" />

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full overflow-hidden border border-zinc-800 shrink-0 bg-yellow-400">
                  <Image
                    src="/images/rit_logo.jpg"
                    alt="RIT"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs text-zinc-200">RIT</span>
                  <span className="text-[10px] font-mono text-zinc-500">Institution</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-blue-400 font-mono tracking-widest uppercase font-semibold">
              {siteConfig.tagline}
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <SocialLinks socials={siteConfig.contact} variant="card" />
            </div>
          </div>

          {/* Column 1: Collective */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              01 / Collective
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About NEXUS
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Leadership Board
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-white transition-colors">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{siteConfig.recruitment.isOpen ? "Spring Recruitment" : "Recruitment Updates"}</span>
                  <span className="text-[9px] font-mono px-1 rounded bg-blue-500/20 text-blue-400">
                    {siteConfig.recruitment.isOpen ? "Open" : "Closed"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Initiatives */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              02 / Initiatives
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/hackathons" className="hover:text-white transition-colors">
                  Hackathon Support Hub
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events & Workshops
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Developer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              03 / Institution
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="font-medium text-zinc-300">
                {siteConfig.institution.name} (RIT)
              </p>
              <div className="flex items-start gap-1.5 text-zinc-500">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-zinc-400" />
                <span>{siteConfig.institution.city}, {siteConfig.institution.state}</span>
              </div>
              <div className="pt-2 text-[11px] font-mono text-zinc-500 space-y-1">
                <p>Faculty Coordinator: {siteConfig.contact.facultyCoordinator}</p>
                <p>Official Email: {siteConfig.contact.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1c1c27] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>© {currentYear} NEXUS — Innovation & Leadership Collective. All rights reserved.</p>
            <p className="text-[11px] text-zinc-600 tracking-wide">Made with <span className="text-rose-400">❤️</span> by Arslan Kokane</p>
          </div>
          <div className="flex items-center gap-4">
            <span>RIT</span>
            <span>•</span>
            <span className="text-zinc-300 font-semibold">BUILD. LEAD. CONNECT.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
