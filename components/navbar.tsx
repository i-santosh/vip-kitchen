"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X, Home, Image as ImageIcon, Info, Grid } from 'lucide-react';
import clsx from "clsx";
import Image from "next/image";
import { Button } from "./ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
}

const BaseNavLink: React.FC<NavLinkProps> = ({ href, children, icon, onClick, mobile }) => {
  const [isFocused, setIsFocused] = useState(false);

  const linkStyles = clsx(
    "relative group flex items-center gap-2",
    mobile
      ? "text-lg p-4 hover:bg-teal-500/10 rounded-lg transition-all duration-300 text-slate-700"
      : "py-2 text-slate-700",
    isFocused && mobile ? "text-teal-600 bg-teal-500/5" : "" // Ensure the ternary returns a valid string
  );


  return (
    <Link
      href={href}
      className={linkStyles}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (mobile) {
          setIsFocused(true);
        }
      }}
      onFocus={() => mobile && setIsFocused(true)}
      onBlur={() => mobile && setIsFocused(false)}
    >

      {icon && <span className={clsx(
        "transition-colors duration-300",
        mobile ? "text-teal-600" : "text-teal-500"
      )}>{icon}</span>}
      <span className="relative z-10 transition-colors duration-300 font-medium">
        {children}
      </span>
      {!mobile && (
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
      )}
    </Link>
  );
};

const NavLink: React.FC<NavLinkProps> = (props) => <BaseNavLink {...props} />;
const MobileNavLink: React.FC<NavLinkProps> = (props) => <BaseNavLink {...props} mobile />;

const navLinks = [
  { href: "/", label: "Home", icon: <Home size={20} /> },
  { href: "/interior-designs", label: "Interior Designs", icon: <ImageIcon size={20} /> },
  { href: "/about-us", label: "About Us", icon: <Info size={20} /> },
  { href: "/gallery", label: "Gallery", icon: <Grid size={20} /> },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md text-slate-900 shadow-lg sticky top-0 transition-all duration-300 z-30">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="relative">
            <Link href="/" className="block transition-transform duration-300 hover:scale-105">
              <Image
                alt="Vip Kitchen"
                src="/logo.jpg"
                width={60}
                height={80}
                className="rounded-lg shadow-md"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
            <Link href="/contact-us">
              <Button className="bg-white text-teal-800 border border-teal-500 hover:bg-teal-700 hover:text-white rounded-lg px-6 flex items-center gap-2 shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                <Mail size={18} />
                <span>Contact Us</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
          >
            <Menu className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar - Fixed position and higher z-index */}
      <div className={clsx(
        "fixed inset-0 z-40", // Cover the full viewport
        "md:hidden", // Hide on desktop
        sidebarOpen ? "visible" : "invisible", // Control visibility
        "transition-visibility duration-300"
      )}>
        {/* Sidebar Background Overlay */}
        <div
          className={clsx(
            "absolute inset-0 bg-black/30 backdrop-blur-sm",
            sidebarOpen ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300"
          )}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar Content */}
        <div className={clsx(
          "absolute inset-y-0 left-0 w-80 bg-white/60 backdrop-blur-md shadow-xl",
          "transform transition-transform duration-300 ease-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
                <Image
                  alt="Vip Kitchen"
                  src="/logo.jpg"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm"
                />
                <h2 className="text-xl font-semibold text-slate-800">VIP Kitchen</h2>
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-slate-700" />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <div className="space-y-1">
                {navLinks.map(({ href, label, icon }) => (
                  <MobileNavLink
                    key={href}
                    href={href}
                    icon={icon}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {label}
                  </MobileNavLink>
                ))}
              </div>

              {/* Contact Button */}
              <div className="mt-6 px-1">
                <Link
                  href="/contact-us"
                  className="flex items-center gap-2 w-full p-4 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 font-medium"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Mail size={20} />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t">
              <p className="text-sm text-slate-500 text-center">
                © 2024 VIP Kitchen. All rights reserved.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
