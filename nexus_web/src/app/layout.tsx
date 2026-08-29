import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NEXUS — Innovation & Leadership Collective | RIT",
    template: "%s | NEXUS RIT",
  },
  description:
    "Official website of NEXUS — Innovation & Leadership Collective at Rajarambapu Institute of Technology (RIT). BUILD. LEAD. CONNECT.",
  keywords: [
    "NEXUS",
    "NEXUS RIT",
    "RIT",
    "Innovation Club",
    "Leadership Club",
    "Hackathons",
    "Engineering",
    "Technology",
    "Rajarambapu Institute of Technology",
  ],
  authors: [{ name: "NEXUS Tech Team", url: "https://nexusrit.org" }],
  icons: {
    icon: "/Nexus_Logo.svg",
    apple: "/Nexus_Logo.svg",
  },
  openGraph: {
    title: "NEXUS — Innovation & Leadership Collective | RIT",
    description:
      "Official website of NEXUS — Innovation & Leadership Collective at Rajarambapu Institute of Technology (RIT). BUILD. LEAD. CONNECT.",
    url: "https://nexusrit.org",
    siteName: "NEXUS RIT",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#050507] text-[#f4f4f6]">
        {children}
      </body>
    </html>
  );
}
