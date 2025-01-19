import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/footer";


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

export const metadata: Metadata = {
  title: "VIP Kitchen - Meet Interior Designers",
  description: "Meet Interior Designers",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head> */}
      <link rel="icon" href="/favicon.ico" />
      {/* </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <NextTopLoader
          color="#14b8a6"
          showSpinner={false}
        />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
