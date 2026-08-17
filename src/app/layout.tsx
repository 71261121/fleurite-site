import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
  title: "The Avoidant's Unwritten Rules | Fleurite.me",
  description: "5 hidden dynamics of every avoidant relationship — and the 3 moves to stay calm, set your boundary, and decide: stay or go. On your terms. $27 instant PDF.",
  keywords: [
    "avoidant attachment",
    "anxious attachment",
    "avoidant partner",
    "relationship psychology",
    "attachment theory",
    "what to text when he pulls away",
    "relationship anxiety",
    "avoidant dynamic",
    "stop chasing",
    "relationship scripts",
  ],
  openGraph: {
    title: "The Avoidant Plays a Game He Never Told You the Rules To | Fleurite.me",
    description: "5 unwritten rules of every avoidant dynamic — and the framework to respond with calm, set real boundaries, and decide: stay or go. Yours forever. $27.",
    images: ["/og-image.png"],
    type: "website",
    locale: "en_US",
    siteName: "Fleurite.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Avoidant's Unwritten Rules | Fleurite.me",
    description: "5 hidden dynamics. 47 scripts. The 3-question decision framework. Finally understand the game — and play it on your terms.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CheckoutGateway />
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
