import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050507] text-[#f4f4f6] px-4">
      <Container size="sm">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400 mx-auto">
            <Terminal className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <div className="text-5xl sm:text-6xl font-bold font-mono text-zinc-300">404</div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">Route Not Found</h1>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              The requested node does not exist in the NEXUS system topology.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/">
              <Button variant="primary" size="md">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to NEXUS Hub
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
