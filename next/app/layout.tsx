import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import SiteNav from "@/components/SiteNav";
import ViewTransitionStyles from "@/components/ViewTransitionStyles";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sebastianhallman.com"),
  title: {
    default: "Sebastian Hällman — Portfolio",
    template: "%s — Sebastian Hällman",
  },
  description:
    "Portfolio of Sebastian Hällman — M.Sc. Media Technology, developer and designer.",
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ViewTransitionStyles />
        <SiteNav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
