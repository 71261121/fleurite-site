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
  title: "When He Goes Quiet — 47 Scripts for the Moment He Pulls Away | Fleurite",
  description: "He goes quiet and you fall apart. Here's exactly what to send. 47 word-for-word scripts, a stay-or-leave framework, and a 7-day reset so you stop chasing an avoidant partner. Instant PDF.",
  keywords: ["what to text when he pulls away", "avoidant partner scripts", "stop chasing", "relationship anxiety", "anxious attachment", "stay or leave", "nervous system reset", "the rooted method", "when he goes quiet"],
  openGraph: {
    title: "When He Goes Quiet — What to Send When He Pulls Away | Fleurite",
    description: "47 tested, word-for-word scripts for every moment you freeze, fold, or want to chase — plus a stay-or-leave framework and a 7-day reset. Read it tonight, use it tomorrow.",
    type: "website",
    locale: "en_US",
    siteName: "Fleurite",
  },
  twitter: {
    card: "summary_large_image",
    title: "When He Goes Quiet — 47 Scripts for the Moment He Pulls Away",
    description: "You don't need another page telling you to 'just relax.' You need the words. 47 scripts, a decision framework, and a 7-day reset.",
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
