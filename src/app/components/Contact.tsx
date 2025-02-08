"use client";

import { FC, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // Reset form after success
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-cream py-12 sm:py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-cream/50 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div ref={ref} className="space-y-8 sm:space-y-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif text-carbon font-bold mb-8 sm:mb-12 text-center transform transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Contact Us
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className={`space-y-6 sm:space-y-8 transform transition-all duration-700 ${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-gold flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-carbon font-bold mb-1 sm:mb-2">Headquarters</h3>
                    <p className="text-carbon text-sm sm:text-base">Geneva, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-gold flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-carbon font-bold mb-1 sm:mb-2">Email</h3>
                    <a href="mailto:info@adriaansenconsulting.com" 
                       className="text-gold hover:underline transition-colors duration-300 text-sm sm:text-base break-all">
                      info@adriaansenconsulting.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-gold flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-carbon font-bold mb-1 sm:mb-2">Business Hours</h3>
                    <p className="text-carbon text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-700 ${
              inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-carbon mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-base rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all duration-300
                             appearance-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-carbon mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-base rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all duration-300
                             appearance-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-carbon mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-base rounded-lg border border-gray-300 
                             focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all duration-300 
                             resize-none appearance-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-base transition-all duration-300
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gold hover:bg-gold/90 active:bg-gold/80 hover:shadow-lg transform hover:scale-[1.02] active:scale-100'
                    }
                  `}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === "success" && (
                  <p className="text-green-600 text-center text-sm sm:text-base animate-fadeIn">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                )}

                {submitStatus === "error" && (
                  <p className="text-red-600 text-center text-sm sm:text-base animate-fadeIn">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
