import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const bai_jamjuree = Bai_Jamjuree({
  weight: ["300", "400", "600"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "YNP Coding",
  description:
    "เว็บพอร์ตของ YNP Coding รวมผลงานด้าน Fullstack Development, DevOps, Data Engineering และงานระบบ",
  keywords:
    "Portfolio, Fullstack Developer, DevOps, Next.js, React, โปรแกรมเมอร์, เว็บไซต์ส่วนตัว, งานพัฒนาเว็บ",
  authors: [{ name: "YNP Coding", url: "https://yp-engineering.vercel.app" }],
  creator: "YNP Coding",
  openGraph: {
    title: "YNP Coding",
    description:
      "รวมผลงานด้าน Fullstack Dev, Data Engineering, และ DevOps ของ YNP Coding",
    url: "https://yp-engineering.vercel.app",
    siteName: "YNP Coding",
    images: [
      {
        url: "https://yp-engineering.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YNP Coding",
    description: "เว็บพอร์ตงานด้าน Fullstack, DevOps, Data ของ YNP Coding",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import { Providers } from "./providers";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bai_jamjuree.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-X6984Q8LQ3" />
    </html>
  );
}
