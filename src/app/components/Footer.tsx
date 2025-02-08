// components/Footer.tsx
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-carbon text-cream py-12 sm:py-16 relative">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-gold">
              Adriaansen Consulting
            </h3>
            <p className="text-sm sm:text-base text-cream/80 max-w-xs leading-relaxed hover:text-cream transition-colors duration-300">
              Where Tradition Meets Innovation—AI, Blockchain, and Finance for the Future.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link 
                  href="#overview" 
                  className="hover:text-gold transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="hover:text-gold transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="#team" 
                  className="hover:text-gold transition-colors duration-300 inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  Team
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a 
                  href="mailto:info@adriaansenconsulting.com"
                  className="hover:text-gold transition-colors duration-300 inline-flex items-center group break-all"
                  aria-label="Email us"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  info@adriaansenconsulting.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gold">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 -m-2 focus:outline-none"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cream/80 group-hover:text-gold transition-colors duration-300" 
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-cream/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-cream/60 hover:text-cream/80 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Adriaansen Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
