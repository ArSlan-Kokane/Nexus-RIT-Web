import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#050507] text-[#f4f4f6]">
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col focus:outline-none">{children}</main>
      <Footer />
    </div>
  );
}
