import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/lib/cursor-context";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollProgressBar from "@/components/ScrollProgressBar";

// Display face: warm, characterful serif — pairs with the logo's hand-lettered
// script without competing against it. Body: clean, quiet sans-serif.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Log Homes International | Luxury Wooden Home Builders in Oman",
  description:
    "The craftsmanship of Log Homes India, now building in Oman and the Gulf. Imported kiln-dried timber, in-house design and architecture, 13+ years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-paper font-body text-brand">
        <CursorProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            <NoiseOverlay />
            <CustomCursor />
            {children}
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
