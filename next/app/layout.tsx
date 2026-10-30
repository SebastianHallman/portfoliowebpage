import type { Metadata } from "next";
import { Palanquin, Palanquin_Dark } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import SiteNav from "@/components/SiteNav";
import ViewTransitionStyles from "@/components/ViewTransitionStyles";
import "./globals.css";

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-palanquin",
});

const palanquinDark = Palanquin_Dark({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-palanquin-dark",
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
      className={`${palanquin.variable} ${palanquinDark.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ViewTransitionStyles />
        <SiteNav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
