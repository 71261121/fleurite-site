import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Break the Anxious Attachment Cycle | Fleurite.me",
  description: "Psychology-backed system to break anxious attachment cycles. 35+ word-for-word scripts, 7-Day Anxiety Reset, and secure relationship tools.",
  keywords: ["relationship advice", "avoidant partner", "anxious attachment", "secure attachment", "relationship anxiety", "dating tips", "psychology", "attachment theory"],
  openGraph: {
    title: "Break the Anxious Attachment Cycle | Fleurite.me",
    description: "Psychology-backed system to break anxious attachment cycles. 35+ word-for-word scripts included.",
    type: "website",
    locale: "en_US",
    siteName: "Fleurite.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Break the Anxious Attachment Cycle | Fleurite.me",
    description: "Psychology-backed system to break anxious attachment cycles. 35+ word-for-word scripts included.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qj_uh6kS7VsUUhi-8CVBIbVQ849HzZjG8unzsymq0Ow",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
