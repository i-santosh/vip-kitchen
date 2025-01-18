"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import clsx from "clsx";
import ContactButton from "@/components/contact-button";
import Image from "next/image";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-stone-700 z-50 text-primary-foreground shadow-md h-20 sticky top-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-accent transition-colors duration-300">
            <Image alt="Vip Kitchen" src={'/logo.jpg'} width={60} height={80} className="rounded-md" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/interior-designs">Interior Designs</NavLink>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <Link href="/contact-us">
            <ContactButton />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded focus:outline-none hover:bg-primary-foreground/10 transition-colors duration-300"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out bg-primary text-primary-foreground",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded focus:outline-none hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="space-y-4 p-4">
          <MobileNavLink href="/interior-designs" onClick={() => setSidebarOpen(false)}>
            Interior Designs
          </MobileNavLink>
          <MobileNavLink href="/about-us" onClick={() => setSidebarOpen(false)}>
            About Us
          </MobileNavLink>
          <MobileNavLink href="/gallery" onClick={() => setSidebarOpen(false)}>
            Gallery
          </MobileNavLink>
          <MobileNavLink href="/contact-us" onClick={() => setSidebarOpen(false)}>
            Contact Us
          </MobileNavLink>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group">
      <span className="relative z-10 hover:text-accent transition-colors duration-300">{children}</span>
      <span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform 
          group-hover:origin-left group-hover:scale-x-100 
          origin-right scale-x-0 transition-all duration-300 ease-out"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></span>
      </span>
      <span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform 
          group-hover:scale-x-0 
          origin-right scale-x-100 transition-all duration-300 ease-out
          hidden group-hover:block
        "
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></span>
      </span>
    </Link>
  );
}


function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Link
      href={href}
      className={`relative group block text-lg transition-colors duration-300 ${isFocused ? 'text-accent' : ''}`}
      onClick={() => {
        onClick();
        setIsFocused(true);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform
          ${isFocused || 'group-hover:origin-left group-hover:scale-x-100'}
          origin-right scale-x-0 transition-all duration-300 ease-out`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></span>
      </span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform 
          ${isFocused || 'group-hover:scale-x-0'} 
          origin-right scale-x-100 transition-all duration-300 ease-out
          hidden group-hover:block`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-transparent"></span>
      </span>
    </Link>
  );
}



