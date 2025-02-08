export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Adriaansen Consulting",
    "description": "Strategic Finance, Wealth Management & Digital Transformation consultancy specializing in AI and Blockchain solutions",
    "@id": "https://www.adriaansen-consulting.com",
    "url": "https://www.adriaansen-consulting.com",
    "logo": "https://www.adriaansen-consulting.com/logo_1.png",
    "image": [
      "https://www.adriaansen-consulting.com/logo_1.png",
      "https://www.adriaansen-consulting.com/logo_2.png"
    ],
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/adriaansen-consulting",
      "https://twitter.com/adriaansenconslt"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      }
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Strategic Finance Consulting",
        "description": "Expert consulting in strategic finance and wealth management"
      },
      {
        "@type": "Offer",
        "name": "Digital Transformation",
        "description": "AI and Blockchain solutions for business transformation"
      },
      {
        "@type": "Offer",
        "name": "Innovation Consulting",
        "description": "Digital innovation and technology implementation strategies"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Consulting Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Strategic Finance",
          "description": "Comprehensive financial strategy and wealth management solutions"
        },
        {
          "@type": "OfferCatalog",
          "name": "Digital Solutions",
          "description": "AI and blockchain implementation for business transformation"
        }
      ]
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.adriaansen-consulting.com"
    },
    "faqPage": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Adriaansen Consulting provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide strategic finance consulting, wealth management, and digital transformation services with a focus on AI and blockchain solutions."
          }
        },
        {
          "@type": "Question",
          "name": "How can digital transformation benefit my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital transformation can improve operational efficiency, enhance customer experience, and create new business opportunities through the implementation of AI and blockchain technologies."
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}