"use client";

import { FC, JSX } from "react";
import { useInView } from "react-intersection-observer";

interface Service {
  title: string;
  description: string[];
  icon: JSX.Element;
}

const Services: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services: Service[] = [
    {
      title: "Wealth & Trust Structuring",
      description: [
        "Traditional Estate Planning",
        "Cross-border Structuring",
        "Tokenized Asset Integration",
        "Family Office Services",
        "Succession Planning"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Regulatory Compliance",
      description: [
        "KYC & AML Compliance",
        "Risk Management",
        "Regulatory Reporting",
        "Compliance Training",
        "Audit Support"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Digital Transformation",
      description: [
        "AI Integration",
        "Blockchain Solutions",
        "Process Automation",
        "Digital Strategy",
        "Innovation Consulting"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative bg-cream py-12 sm:py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className="space-y-8 sm:space-y-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif text-carbon font-bold mb-8 sm:mb-12 text-center transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Core Services & Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-white rounded-xl shadow-xl p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-gold mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-serif text-carbon font-bold mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                
                <ul className="space-y-2 sm:space-y-3 text-carbon text-sm sm:text-base">
                  {service.description.map((item, i) => (
                    <li key={i} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gold mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
