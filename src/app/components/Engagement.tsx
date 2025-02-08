"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

interface EngagementStep {
  title: string;
  description: string[];
  icon: React.JSX.Element;
  details: string;
}

const StepIcon: React.FC<{ icon: React.JSX.Element; title: string }> = ({ icon, title }) => (
  <div className="text-gold mb-4 sm:mb-6 transform transition-transform duration-300 group-hover:scale-110" 
       role="img" 
       aria-label={`${title} icon`}>
    {React.cloneElement(icon, {
      className: 'w-8 h-8 sm:w-12 sm:h-12',
      "aria-hidden": true
    })}
  </div>
);

const steps: EngagementStep[] = [
  {
    title: "Initial Discovery & Assessment",
    description: [
      "Comprehensive review of financial structures, compliance risks, and tech gaps",
      "Gap analysis to identify vulnerabilities and fintech/AI opportunities",
      "Stakeholder interviews and current state assessment",
    ],
    details: "We begin with a thorough analysis of your current financial infrastructure, identifying opportunities for optimization and innovation.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Strategic Roadmap",
    description: [
      "Custom action plans outlining milestones, investments, and regulatory needs",
      "Tailored AI and fintech transformation strategies",
      "Risk assessment and mitigation planning",
    ],
    details: "We develop a comprehensive roadmap that aligns with your goals, incorporating cutting-edge technology solutions.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Implementation & Execution",
    description: [
      "Hands-on advisory for AI integration, compliance, and fintech adoption",
      "Development of smart contracts, digital asset strategies, and compliance frameworks",
      "Change management and team training",
    ],
    details: "Our experts work alongside your team to implement solutions and ensure smooth adoption of new technologies.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Ongoing Advisory & Support",
    description: [
      "Market monitoring, AI performance optimization, and risk mitigation",
      "Regular updates on financial regulations, fintech trends, and AI innovations",
      "Continuous improvement and adaptation",
    ],
    details: "We provide ongoing support and guidance to ensure long-term success and adaptation to market changes.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Engagement: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="engagement" 
             className="relative bg-carbon py-12 sm:py-16 md:py-24 overflow-hidden"
             aria-label="Engagement Process">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat animate-slide" 
             aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className="space-y-8 sm:space-y-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif text-cream font-bold mb-8 sm:mb-12 text-center transform transition-all duration-700 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Engagement Model
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group bg-cream rounded-xl shadow-xl p-6 sm:p-8 transform transition-all duration-500 ease-out hover:shadow-2xl ${
                  inView
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${Math.min(index * 200, 800)}ms` }}
                role="article"
              >
                <StepIcon icon={step.icon} title={step.title} />

                <h3 className="text-xl sm:text-2xl font-serif text-carbon font-bold mb-3 sm:mb-4 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>

                <p className="text-carbon/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  {step.details}
                </p>

                <ul className="space-y-2 sm:space-y-3 text-carbon" role="list">
                  {step.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                      style={{ transitionDelay: `${Math.min(i * 100, 300)}ms` }}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-gold mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm sm:text-base">{item}</span>
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

export default Engagement;
