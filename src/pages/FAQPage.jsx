import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What services does Mindor Tech offer?",
      answer: "We offer a range of IT solutions including Mobile App Development, Web Development, AI Solutions, Robotic Process Automation (RPA), Blockchain Development, and Digital Marketing. Our focus is on helping businesses of all sizes enhance efficiency, drive growth, and transform digitally."
    },
    {
      question: "How can Mindor Tech help my business?",
      answer: "We offer tailored solutions to fit your needs, whether it's a mobile app, a responsive website, AI automation, or digital marketing. Our goal is to streamline your operations, boost your online presence, and deliver measurable results."
    },
    {
      question: "Do you work with startups or only large businesses?",
      answer: "We work with businesses of all sizes, from startups to enterprises. Our solutions are flexible and scalable to meet the needs of growing companies, ensuring your business gets the support it needs at any stage."
    },
    {
      question: "How do I get started with Mindor Tech?",
      answer: "Getting started is easy! Simply reach out to us via our website or contact us directly through WhatsApp to discuss your business needs. Our team will provide a consultation and guide you through the next steps in creating the perfect solution for your business."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex mobile app could take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer various maintenance and support packages to ensure your digital solutions continue to perform optimally. From routine updates to technical support, we're committed to your long-term success."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, Flutter, and various cloud platforms. Our technology stack is chosen based on your specific project requirements to ensure optimal performance and scalability."
    },
    {
      question: "Do you provide maintenance and updates?",
      answer: "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, performance monitoring, and technical support. We believe in building long-term partnerships with our clients."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can help improve, maintain, or completely revamp your existing digital solutions. Our team can analyze your current setup and provide recommendations for optimization and enhancement."
    },
    {
      question: "What makes Mindor Tech different from other IT companies?",
      answer: "We combine technical expertise with a deep understanding of business needs. Our personalized approach, transparent communication, and commitment to delivering measurable results set us apart. We don't just build solutions; we build partnerships."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background-light">
      {/* Header */}
      <motion.header
        className="bg-white/95 backdrop-blur-md shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Back to Home */}
            <Link 
              to="/"
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>

            {/* Brand */}
            <div className="text-2xl font-bold font-secondary text-primary">
              Mindor Tech
            </div>

            {/* Contact CTA */}
            <Link
              to="/#contact"
              className="btn btn-primary rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="py-24">
        <div className="container">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Get comprehensive answers to common questions about our services, processes, and how we can help transform your business with cutting-edge technology solutions.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* FAQ List */}
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className={`bg-white border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                    activeIndex === index 
                      ? 'shadow-xl border-primary/30' 
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {/* Question */}
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background-light transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-xl font-semibold text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-primary font-bold text-2xl rounded-full bg-primary/10"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-8">
                          <p className="text-text-secondary leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Can't find what you're looking for? Our team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="btn btn-white rounded-full px-8 py-3 text-primary font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
                <a
                  href="https://wa.me/your-whatsapp-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default FAQPage; 