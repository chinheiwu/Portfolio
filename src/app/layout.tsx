import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://chinheiwu.dev"; // TODO: replace with your real deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chin Hei Wu — Mechanical Design Engineer",
  description:
    "Portfolio of Chin Hei Wu, a Mechanical Design Engineer specialising in plastics, sheet metal, and prototyping for product design.",
  keywords: [
    "Chin Hei Wu",
    "Mechanical Design Engineer",
    "Product Design",
    "SolidWorks",
    "Plastics Design",
    "Sheet Metal Design",
    "Prototyping",
  ],
  authors: [{ name: "Chin Hei Wu" }],
  openGraph: {
    title: "Chin Hei Wu — Mechanical Design Engineer",
    description:
      "Turning ideas into functional, manufacturable designs. Portfolio of product design work in plastics, sheet metal, and prototyping.",
    url: siteUrl,
    siteName: "Chin Hei Wu Portfolio",
    images: [
      {
        // TODO: replace with a real 1200x630 OG image at /public/images/og-image.svg
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Chin Hei Wu — Mechanical Design Engineer",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chin Hei Wu — Mechanical Design Engineer",
    description:
      "Turning ideas into functional, manufacturable designs. Portfolio of product design work in plastics, sheet metal, and prototyping.",
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Inline script prevents a flash of the wrong theme before hydration.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    if (isDark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
