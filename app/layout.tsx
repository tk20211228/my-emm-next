import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const AppConfig = {
  title: "MyEMM Next",
  description: `MyEMM Next is Enterprise Mobility Management(EMM) solution a Next.js application.`,
  origin: "https://my-emm-next.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.origin),
  title: "%s | " + AppConfig.title,
  description: AppConfig.description,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "min-h-dvh"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
