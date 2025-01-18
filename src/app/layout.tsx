import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
