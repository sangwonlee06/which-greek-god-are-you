import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://which-greek-god-are-you.vercel.app"),
  title: "Which Greek God Are You?",
  description:
      "Answer 10 questions to discover which Greek god matches your personality. Share your divine identity!",
  openGraph: {
    title: "Which Greek God Are You?",
    description:
        "Answer 10 questions to discover which Greek god matches your personality.",
    type: "website",
    siteName: "Which Greek God Are You?",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Greek God Are You?",
    description:
        "Answer 10 questions to discover which Greek god matches your personality.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="bg-[#050507] text-white antialiased">
      {children}
      <Analytics />
      <SpeedInsights />
      </body>
      </html>
  );
}