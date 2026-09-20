import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Radio, Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - SIGNAL NOT FOUND",
  description: "The requested route does not exist in the NEXUS system topology.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050507] text-[#f4f4f6] px-4 relative overflow-hidden">
      {/* Background Subtle Coordinate Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)"
        }}
      />

      <Container size="sm">
        <div className="text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-xs font-mono text-red-300">
            <Radio className="h-3.5 w-3.5 text-red-400 animate-pulse" />
            <span>TOPOLOGY EXCEPTION // DISCONNECTED NODE</span>
          </div>

          <div className="space-y-3">
            <div className="text-6xl sm:text-8xl font-black font-mono tracking-tighter text-zinc-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              404
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              SIGNAL NOT FOUND
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
              The requested route does not exist in the NEXUS system topology.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#09090e] border border-[#1c1c27] max-w-sm mx-auto text-left font-mono text-xs text-zinc-500 space-y-1">
            <div className="flex items-center gap-2 text-purple-400">
              <Terminal className="h-3.5 w-3.5" />
              <span>DIAGNOSTIC_TRACE</span>
            </div>
            <div className="text-[11px] text-zinc-600">ERR_NODE_UNREACHABLE</div>
            <div className="text-[11px] text-zinc-600">ORIGIN: RIT.ISLAMPUR.EDGE</div>
          </div>

          <div className="pt-4 flex justify-center">
            <Button
              href="/"
              variant="primary"
              size="md"
              className="font-mono text-xs shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>RETURN TO NEXUS</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
