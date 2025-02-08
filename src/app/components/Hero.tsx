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

  const scrollToOverview = (e: React.MouseEvent) => {
    e.preventDefault();
    const overviewSection = document.getElementById("overview");
    overviewSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] bg-carbon overflow-hidden"
      aria-label="Welcome to Adriaansen Consulting"
    >
     
      {/* Enhanced layered backgrounds */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-carbon via-carbon/95 to-carbon/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,245,245,0.03)_0%,transparent_50%)]" />
      </div>
      
      {/* Refined background pattern with subtle movement */}
      <div className="absolute inset-0 opacity-[0.05] z-20" role="presentation">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat animate-subtle-float scale-150" />
      </div>

      <div 
        className={`relative z-30 flex flex-col items-center justify-center min-h-[100svh] px-4 sm:px-6 text-center 
          ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
      >
        {/* Enhanced logo presentation */}
        <div className="relative mb-8 sm:mb-10">
          <div className="absolute inset-0 animate-glow filter blur-md bg-gold/20 rounded-full" />
          <Image
            src="/logo_4.png"
            alt="Adriaansen Consulting Logo"
            width={140}
            height={140}
            priority
            className="relative hover:scale-105 transition-all duration-500 ease-out
                     filter brightness-110 hover:brightness-125"
          />
        </div>
        
        {/* Refined typography with enhanced visual hierarchy */}
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
          <span className="block bg-gradient-to-r from-cream via-cream/95 to-cream/90 bg-clip-text text-transparent 
                         [text-wrap:balance] tracking-tight leading-tight animation-delay-200 animate-slideInDown">
            Where Tradition
          </span>
          <span className="block bg-gradient-to-r from-cream via-cream/95 to-cream/90 bg-clip-text text-transparent 
                         [text-wrap:balance] tracking-tight leading-tight mt-2 animation-delay-300 animate-slideInDown">
            Meets Innovation
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-cream/90 leading-relaxed mb-10 sm:mb-12 
                    max-w-3xl mx-auto px-4 font-light [text-wrap:pretty] tracking-wide
                    animation-delay-400 animate-fadeIn">
          Strategic Finance, Wealth Management & Digital Transformation
        </p>

        {/* Refined button design */}
        <div className="relative group px-4 w-full sm:w-auto animation-delay-500 animate-pop">
          <div className="absolute bg-gradient-to-r from-gold/50 via-cream/30 to-gold/50 rounded-lg blur 
                        opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200
                        animate-glow" />
          <button
            onClick={scrollToServices}
            className="relative w-full sm:w-auto py-4 sm:py-5 px-10 sm:px-12 rounded-lg 
                     transition-all duration-300 hover:scale-[1.02] active:scale-95
                     bg-gradient-to-r from-gold via-gold to-gold hover:to-cream
                     text-carbon font-bold text-lg sm:text-xl
                     focus:outline-none focus:ring-2 focus:ring-gold/50 
                     shadow-lg hover:shadow-xl transform hover:rotate-1"
            aria-label="Explore our services"
          >
            Explore Our Services
          </button>
        </div>

        {/* Refined scroll indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animation-delay-600">
          <div className="absolute -top-2 -left-2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/20 animate-ping" />
          <a 
            href="#overview" 
            onClick={scrollToOverview}
            aria-label="Scroll to overview section"
            className="group flex flex-col items-center gap-2 hover:text-gold 
                     transition-colors duration-300 focus:outline-none
                     rounded-full p-2 hover:scale-110"
          >
            <span className="text-sm font-medium text-cream/70 group-hover:text-gold/90 
                           transition-colors duration-300">Discover More</span>
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-cream/60 group-hover:text-gold/90 
                       transition-all duration-300 animate-float"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
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




