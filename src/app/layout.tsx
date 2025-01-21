import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const notoSerif = Noto_Serif({
  variable: "--font-noto_serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartBook",
  description: "Modern bookstore application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} antialiased`}
      >
        <header>
          <Navbar></Navbar>
        </header>
        {children}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-black text-white p-4">
          All rights reserved Smart Book &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
