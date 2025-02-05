import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer";
import Image from "next/image";
import { Phone } from "lucide-react";

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
      <link rel="icon" href="/favicon.ico" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <NextTopLoader color="#14b8a6" showSpinner={false} />
        {children}
        <Footer />
        
        {/* Floating Action Buttons Container */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7009350717"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-14 h-14"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src="/whatsapp_logo.jpg"
              alt="WhatsApp"
              width={56}
              height={56}
              className="rounded-full shadow-lg hover:scale-110 transition-transform"
            />
          </a>
          
          {/* Call Button */}
          <a
            href="tel:+917009350717"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 shadow-lg hover:scale-110 transition-transform"
            aria-label="Call Us"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
        </div>
      </body>
    </html>
  );
}