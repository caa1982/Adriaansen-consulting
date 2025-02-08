"use client";

import { FC } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string[];
  linkedIn?: string;
}

const Team: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers: TeamMember[] = [
    {
      name: "Jessica Adriaansen",
      role: "Private Banking & Wealth Structuring Expert",
      image: "/logo_3.png",
      linkedIn: "https://www.linkedin.com/in/jessica-adriaansen-523a48120/",
      expertise: [
        "Over 30 years of expertise in private banking and wealth management",
        "Specialist in international trust structuring and regulatory compliance",
        "Expert in global financial regulations (KYC, AML, cross-border compliance)",
        "Trusted advisor to HNW individuals and family offices",
      ],
    },
    {
      name: "Cyril Alvarez Adriaansen",
      role: "Fintech, Blockchain & AI Strategist",
      image: "/logo_1.png",
      linkedIn: "https://www.linkedin.com/in/cyril-al-adriaansen/",
      expertise: [
        "Seasoned fintech and AI strategist",
        "Expert in tokenization, blockchain development, and digital asset strategy",
        "Specializes in AI-driven process automation and risk management",
        "Leading digital transformation initiatives for financial institutions",
      ],
    },
  ];

  return (
    <section id="team" className="relative bg-carbon py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat animate-slide" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className="space-y-12 sm:space-y-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif text-cream font-bold mb-8 sm:mb-12 text-center transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group bg-cream rounded-xl shadow-xl p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl ${
                  inView
                    ? 'translate-x-0 opacity-100'
                    : index === 0
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center sm:flex-row sm:items-start mb-6 space-y-4 sm:space-y-0">
                  <div className="relative w-28 h-28 sm:w-24 sm:h-24 sm:mr-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <h3 className="text-xl sm:text-2xl font-serif text-carbon font-bold">{member.name}</h3>
                      {member.linkedIn && (
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-carbon transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    <p className="text-gold font-medium mt-1 text-sm sm:text-base">{member.role}</p>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 text-carbon text-sm sm:text-base">
                  {member.expertise.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start transform transition-all duration-300 hover:translate-x-2"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-gold mr-2 mt-1 flex-shrink-0"
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

export default Team;