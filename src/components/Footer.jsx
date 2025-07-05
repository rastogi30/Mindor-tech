import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-text-light mb-4 md:mb-0">
            &copy; 2024 Mindor Tech. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            <motion.a
              href="#privacy"
              className="text-text-light hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#terms"
              className="text-text-light hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Terms
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-text-light hover:text-white transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 