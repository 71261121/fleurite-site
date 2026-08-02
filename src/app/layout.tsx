import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import CheckoutGateway from "@/components/CheckoutGateway";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fleurite.me"),
  title: "You Were Never Too Much | Fleurite",
  description: "You weren't born a chaser — you were trained to be one. The Rooted Method helps you stop chasing an avoidant partner, quiet the anxiety, and come home to yourself.",
  keywords: ["anxious attachment healing", "avoidant partner", "stop chasing", "relationship anxiety", "nervous system regulation", "attachment theory", "secure attachment", "the rooted method"],
  openGraph: {
    title: "You Were Never Too Much | Fleurite",
    description: "Stop chasing, stop shrinking, and come home to yourself. A gentle, psychology-backed book for women loving an emotionally unavailable partner.",
    type: "website",
    locale: "en_US",
    siteName: "Fleurite",
  },
  twitter: {
    card: "summary_large_image",
    title: "You Were Never Too Much | Fleurite",
    description: "It was never that you were too much. Safety was never available. The Rooted Method — a gentle path back to yourself.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qj_uh6kS7VsUUhi-8CVBIbVQ849HzZjG8unzsymq0Ow",
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4a3c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased bg-cream`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CheckoutGateway />
      </body>
    </html>
  );
}
