import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CheckoutGateway from "@/components/CheckoutGateway";

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
  title: "Stop Shrinking Yourself | Relationship Clarity & Scripts | Fleurite",
  description: "Break the anxiety cycle with 47 tested scripts, the Binary Question framework, and nervous system science. Know whether to rebuild with boundaries or leave with dignity.",
  keywords: ["relationship advice", "avoidant partner", "anxious attachment", "relationship anxiety", "attachment theory", "nervous system", "relationship scripts", "breakup advice", "secure relationships"],
  openGraph: {
    title: "Stop Shrinking Yourself | Relationship Clarity & Scripts | Fleurite",
    description: "Break the anxiety cycle with 47 tested scripts, the Binary Question framework, and nervous system science.",
    type: "website",
    locale: "en_US",
    siteName: "Fleurite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Shrinking Yourself | Relationship Clarity & Scripts | Fleurite",
    description: "Break the anxiety cycle with 47 tested scripts, the Binary Question framework, and nervous system science.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <CheckoutGateway />
      </body>
    </html>
  );
}
