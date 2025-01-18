import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-8 md:py-16">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-8 lg:px-40">
          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/call" className="relative group inline-block">
                  Call us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/about" className="relative group inline-block">
                  About us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/contact" className="relative group inline-block">
                  Contact us
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/whatsapp" className="relative group inline-block">
                  WhatsApp
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Designs Section */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Designs</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/modular-kitchens" className="relative group inline-block">
                  Modular Kitchens
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/interior-work" className="relative group inline-block">
                  Interior Work
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/led-units" className="relative group inline-block">
                  LED Units
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/designs" className="relative group inline-block">
                  See More
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Garhshankar</h3>
            <p className="text-gray-400">
              Chandigarh Road,<br />
              Near Petrol Pump<br />
              Garhshankar, Punjab-India
            </p>
            <ul className="pt-5 space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors duration-300">
                <Link href="tel:+917009350717" className="relative group inline-block">
                  +91 7009350717
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300">
                <Link href="tel:+918968909712" className="relative group inline-block">
                  +91 89689-09712
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/instagram" target="_blank" rel="noopener noreferrer" className="relative group inline-block">
                  Instagram
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/facebook" target="_blank" rel="noopener noreferrer" className="relative group inline-block">
                  Facebook
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/twitter" target="_blank" rel="noopener noreferrer" className="relative group inline-block">
                  Twitter
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/linkedin" target="_blank" rel="noopener noreferrer" className="relative group inline-block">
                  LinkedIn
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">&copy; 2025 VIP Kitchen & Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;