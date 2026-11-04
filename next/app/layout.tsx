import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import SiteNav from "@/components/SiteNav";
import ViewTransitionStyles from "@/components/ViewTransitionStyles";
import { defaultOgImage } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebastianhallman.com"),
  title: {
    default: "Sebastian Hällman — Portfolio",
    template: "%s — Sebastian Hällman",
  },
  description:
    "Portfolio of Sebastian Hällman — M.Sc. Media Technology, developer and designer.",
  openGraph: {
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ViewTransitionStyles />
        <SiteNav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
