import { CARD_INFO } from "@/utils/constant";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: `${CARD_INFO.brideName} & ${CARD_INFO.groomName} | Wedding Invitation`,
  description: `With the blessings of Almighty Allah, we cordially invite you to celebrate the Nikah & Valima ceremony of ${CARD_INFO.brideName} & ${CARD_INFO.groomName}.`,
  authors: [{ name: "Awesome Creation" }],
  icons: {
    icon: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    type: "website",
    siteName: `${CARD_INFO.brideName} & ${CARD_INFO.groomName} Wedding`,
    title: `${CARD_INFO.brideName} & ${CARD_INFO.groomName} | Wedding Invitation`,
    description: `With joy in our hearts, we cordially invite you to celebrate our Nikah & Valima of ${CARD_INFO.brideName} & ${CARD_INFO.groomName}.`,
    images: [
      {
        url: "/og-cover-update.jpg",
        width: 1200,
        height: 630,
        alt: `${CARD_INFO.brideName} & ${CARD_INFO.groomName} | Wedding Invitation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CARD_INFO.brideName} & ${CARD_INFO.groomName} | Wedding Invitation`,
    description: `With joy in our hearts, we cordially invite you to celebrate our Nikah & Valima of ${CARD_INFO.brideName} & ${CARD_INFO.groomName}.`,
    images: ["/og-cover-update.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e5a0ae",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
