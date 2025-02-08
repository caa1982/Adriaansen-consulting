"use client";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";
import { FaBriefcase, FaLink, FaRobot, FaClipboardCheck } from "react-icons/fa";

interface FeatureProps {
  title: string;
  description: string;
  icon: IconType;
  index: number;
  inView: boolean;
}

const Feature: FC<FeatureProps> = ({ title, description, icon: Icon, index, inView }) => {
  return (
    <div
      className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg transform transition-all duration-700 
        hover:scale-105 hover:bg-white hover:shadow-2xl hover:rotate-1 group
        ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0 p-2 bg-cream rounded-lg group-hover:bg-gold/10 transition-colors duration-300">
          <Icon className="text-gold w-6 h-6 sm:w-8 sm:h-8 transform transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-carbon mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-carbon/80 group-hover:text-carbon transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Overview: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      title: "Traditional Finance",
      description: "Private banking and trust structuring expertise with decades of experience",
      icon: FaBriefcase
    },
    {
      title: "Digital Innovation",
      description: "Cutting-edge fintech and blockchain implementation strategies",
      icon: FaLink
    },
    {
      title: "AI Integration",
      description: "Smart solutions powered by artificial intelligence and machine learning",
      icon: FaRobot
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring adherence to global financial regulations and standards",
      icon: FaClipboardCheck
    }
  ];

  return (
    <section id="overview" className="relative bg-cream py-12 sm:py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-cream pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif text-carbon font-bold mb-8 sm:mb-12 text-center transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Overview
          </h2>
          <div ref={ref} className="space-y-8 sm:space-y-12">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 
              transform transition-all duration-700 hover:shadow-2xl
              ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <p className="text-base sm:text-lg md:text-xl text-carbon leading-relaxed mb-6 sm:mb-8">
                Adriaansen Consulting is a boutique advisory firm that merges decades of expertise in private banking, 
                trust structuring, and regulatory compliance with cutting-edge fintech, blockchain, and AI-driven 
                business transformation. We provide tailored strategic guidance to financial institutions, 
                high-net-worth individuals, family offices, and fintech companies—ensuring secure, compliant, 
                and profitable financial strategies.
              </p>
              <div className="border-l-2 sm:border-l-4 border-gold pl-4 sm:pl-6 transform transition-all duration-500 hover:translate-x-2">
                <p className="text-base sm:text-lg md:text-xl italic text-carbon/90">
                  &ldquo;To empower clients with forward-thinking financial solutions by combining the rigor of wealth 
                  management, trust structuring, and compliance with the transformative potential of fintech, 
                  blockchain, and artificial intelligence.&rdquo;
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <Feature
                  key={feature.title}
                  {...feature}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
