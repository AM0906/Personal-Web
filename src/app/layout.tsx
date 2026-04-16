import type { Metadata } from "next";
import { Libre_Baskerville, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarya Mehta — Aerospace Engineering Student",
  description:
    "First-year Aerospace Engineering student at Purdue University. Rocket propulsion researcher at PURPL, published dark matter scientist, and NASA HAS alumnus. Seeking summer 2026 engineering internships.",
  keywords: [
    "Aarya Mehta",
    "Purdue Aerospace Engineering",
    "PURPL",
    "Rocket Propulsion",
    "Dark Matter Research",
    "Engineering Internship 2026",
  ],
  openGraph: {
    title: "Aarya Mehta — Aerospace Engineering Student",
    description:
      "Rocket propulsion, dark matter research, and a 3.94 GPA. Seeking summer 2026 engineering internships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${libreFranklin.variable}`}
    >
      <body className="antialiased bg-nyt-bg text-nyt-text font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
