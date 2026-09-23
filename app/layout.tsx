import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rami Abu — Portfolio",
  description:
    "Personal portfolio showcasing projects in full-stack development, machine learning, and systems.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-clip bg-[#050507] text-white`}
      >
        {/* Decorative background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#050507]" />
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute -right-52 top-10 h-[520px] w-[520px] rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute left-1/3 -bottom-56 h-[620px] w-[620px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>

        {/* Page wrapper */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-3 sm:pt-10 pb-20 sm:pb-24">
          <Navbar />

          {/* Page content */}
          <div className="pt-4 sm:pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}