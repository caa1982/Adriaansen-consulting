"use client";
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'overview', 'team', 'services', 'engagement', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= window.innerHeight / 3 && bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const scrollToHero = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-carbon/50 backdrop-blur-sm transition-opacity duration-500 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsOpen(false);
          document.body.style.overflow = '';
        }}
      />
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-lg' : 'bg-cream'
      }`}>
        <div className="container mx-auto flex items-center justify-between p-4">
          <div 
            onClick={scrollToHero}
            className="flex items-center space-x-3 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <Image 
              src="/logo_5.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              priority 
              className="rounded-lg group-hover:rotate-3 transition-transform duration-300" 
            />
            <span className="text-lg sm:text-xl md:text-2xl font-serif text-carbon font-bold truncate group-hover:text-gold transition-colors duration-300">
              Adriaansen Consulting
            </span>
          </div>
          
          <button
            className="text-carbon md:hidden hover:text-gold transition-colors z-50 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className={`
            md:flex fixed md:static top-0 left-0 w-full h-screen md:h-auto md:w-auto
            transform transition-all duration-500 ease-out bg-cream
            ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full md:translate-y-0 opacity-0 md:opacity-100'}
            ${isScrolled ? 'bg-cream/95 backdrop-blur-sm' : 'bg-cream'}
            md:bg-transparent md:backdrop-blur-none z-50
          `}>
            <ul className="flex flex-col md:flex-row md:items-center h-full md:h-auto justify-center py-16 md:py-0 px-4 md:px-0 space-y-6 md:space-y-0 md:space-x-8">
              {['overview', 'team', 'services', 'engagement', 'contact'].map((item) => (
                <li key={item} className="relative group">
                  <Link
                    href={`#${item}`}
                    className={`
                      block py-2 text-carbon font-medium capitalize text-lg md:text-base text-center md:text-left
                      relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                      after:bg-gold after:transform after:scale-x-0 after:origin-left
                      after:transition-transform after:duration-300 
                      hover:text-gold hover:after:scale-x-100
                      ${activeSection === item ? 'text-gold after:scale-x-100' : ''}
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document.body.style.overflow = '';
                      const element = document.getElementById(item);
                      if (element) {
                        const offset = 100; // offset for the fixed navbar
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;




