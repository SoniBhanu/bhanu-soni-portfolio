import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer'
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from '@/components/ui/ScrollToTop'
import PlausibleProvider from 'next-plausible'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanu Soni Portfolio | Full Stack Developer",
  description: "A showcase of my work and skills in web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="yourdomain.com" />
      </head>
      <body className={inter.className}>
  <CustomCursor />
  <ScrollProgress />
  <ParticleBackground />
  <Providers>
    <Navbar />
    <main className="min-h-screen">
      <PageTransition>
        {children}
      </PageTransition>
    </main>
    <Footer />
    <ScrollToTop />
  </Providers>
</body>
    </html>
  )
}
