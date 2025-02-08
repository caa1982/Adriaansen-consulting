"use client";

import { FC, useEffect, useState } from 'react';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 
                 bg-gold backdrop-blur-sm p-3 sm:p-4 
                 rounded-full shadow-lg transition-all duration-500
                 hover:bg-gold hover:text-cream
                 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold/50 
                 z-50 touch-manipulation group will-change-transform
                 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
      aria-label="Scroll to top"
    >
      <div className="relative">
        <svg 
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 ${
            isHovered ? 'translate-y-[-2px]' : 'translate-y-0'
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
        <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} />
      </div>
    </button>
  );
};

export default ScrollToTop;