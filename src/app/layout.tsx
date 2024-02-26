import type { Metadata } from "next";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nextjs templates website",
  description: "A large set of nextjs templates, ui kits, Astrojs templates, tailwindcss components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-dark-900 selection:bg-primary-500/50 selection:text-light-500 text-light-500",
          GeistMono.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
