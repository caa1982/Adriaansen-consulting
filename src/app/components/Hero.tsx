"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

const Hero: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] bg-carbon overflow-hidden"
      aria-label="Welcome to Adriaansen Consulting"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-carbon via-carbon/90 to-carbon/70" role="presentation" />
      
      {/* Parallax background pattern */}
      <div className="absolute inset-0 opacity-10" role="presentation">
        <div 
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat will-change-transform" 
          style={{
            transform: isVisible ? 'translateZ(0) scale(1.1)' : 'translateZ(0) scale(1)',
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[100svh] px-4 sm:px-6 text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <Image
          src="/logo_4.png"
          alt="Adriaansen Consulting Logo"
          width={100}
          height={100}
          priority
          className="mb-6 sm:mb-8 drop-shadow-2xl transform hover:scale-110 transition-transform duration-500 sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] will-change-transform"
        />
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-cream leading-tight mb-4 sm:mb-6 drop-shadow-2xl">
          <span className="block animate-fadeIn bg-gradient-to-r from-cream to-cream/90 bg-clip-text text-transparent [text-wrap:balance]">Where Tradition</span>
          <span className="block animate-fadeIn animation-delay-200 bg-gradient-to-r from-cream to-cream/90 bg-clip-text text-transparent [text-wrap:balance]">Meets Innovation</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-cream/90 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto animate-fadeIn animation-delay-400 px-4 font-light [text-wrap:pretty]">
          Strategic Finance, Wealth Management & Digital Transformation
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn animation-delay-600 px-4 w-full sm:w-auto">
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-carbon font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-lg 
                     transition-all transform duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1
                     focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95 will-change-transform"
            aria-label="View our services"
          >
            Explore Our Services
          </button>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeIn animation-delay-800">
          <a 
            href="#overview" 
            aria-label="Scroll to overview section"
            className="block transition-all duration-300 hover:translate-y-2 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-full p-2"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-cream/90 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;




