import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { MapPin, Phone, Instagram, Facebook, MessageSquare } from 'lucide-react';


interface FooterLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

interface LinkItem {
  href: string;
  text: string;
  icon?: ReactNode;
}

const FooterLink: FC<FooterLinkProps> = ({ href, children, external }) => (
  <li className="group">
    <Link
      href={href}
      className="relative inline-flex items-center text-gray-300 hover:text-teal-300 transition-colors duration-300"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
    </Link>
  </li>
);

const FooterSection: FC<FooterSectionProps> = ({ title, children }) => (
  <div className="col-span-2 sm:col-span-1">
    <h3 className="text-lg md:text-xl font-bold mb-6 text-white relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-12 h-1 bg-teal-400 rounded-full"></span>
    </h3>
    {children}
  </div>
);

const Footer: FC = () => {
  const quickLinks: LinkItem[] = [
    { href: 'tel:917009350717', text: 'Call us' },
    { href: '/about-us', text: 'About us' },
    { href: '/contact-us', text: 'Contact us' },
    { href: 'https://wa.me/917009350717', text: 'WhatsApp' }
  ];

  const designLinks: LinkItem[] = [
    { href: '/interior-designs', text: 'Modular Kitchens' },
    { href: '/interior-designs', text: 'Interior Work' },
    { href: '/interior-designs', text: 'LED Units' },
    { href: '/interior-designs', text: 'See More' }
  ];

  const socialLinks: LinkItem[] = [
    { href: 'https://www.instagram.com/vipkitchen65/', text: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { href: 'https://www.facebook.com/people/VIP-Kitchen/100082641335949/', text: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { href: 'https://wa.me/917009350717', text: 'WhatsApp', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-stone-900 to-stone-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 px-4 md:px-8 lg:px-40">
          {/* Quick Links Section */}
          <FooterSection title="Quick Links">
            <ul className="space-y-4">
              {quickLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>
                  {link.text}
                </FooterLink>
              ))}
            </ul>
          </FooterSection>

          {/* Designs Section */}
          <FooterSection title="Designs">
            <ul className="space-y-4">
              {designLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>
                  {link.text}
                </FooterLink>
              ))}
            </ul>
          </FooterSection>

          {/* Address Section */}
          <FooterSection title="Garhshankar">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 text-teal-400" />
                <p>
                  Nawanshahr Road,<br />
                  Near Petrol Pump<br />
                  Garhshankar, Punjab-India
                </p>
              </div>
              <div className="space-y-2">
                <FooterLink href="tel:+917009350717">
                  <Phone className="w-4 h-4 mr-2 text-teal-400" />
                  +91 7009350717
                </FooterLink>
                <FooterLink href="tel:+918968909712">
                  <Phone className="w-4 h-4 mr-2 text-teal-400" />
                  +91 89689-09712
                </FooterLink>
              </div>
            </div>
          </FooterSection>

          {/* Social Media Section */}
          <FooterSection title="Follow Us">
            <ul className="space-y-4">
              {socialLinks.map(link => (
                <FooterLink key={link.href} href={link.href} external>
                  <span className="flex items-center space-x-2">
                    <span className="text-teal-400">{link.icon}</span>
                    <span>{link.text}</span>
                  </span>
                </FooterLink>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-stone-700/50 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-400">
              &copy; 2008 - {new Date().getFullYear()} VIP Kitchen & Interiors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;