import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
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
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our services and how we can help your business succeed
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`bg-white border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? 'shadow-lg border-primary/20' 
                    : 'shadow-sm hover:shadow-md'
                }`}
                whileHover={{ y: -2 }}
              >
                {/* Question */}
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background-light transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-primary font-bold text-xl"
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
                      <div className="px-8 pb-6">
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 