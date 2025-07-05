import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#faq', text: 'FAQ' },
    { href: '#contact', text: 'Contact' },
  ];

  const handleNavClick = (href) => {
    scrollToSection(href.substring(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <motion.div 
            className="nav-brand"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className={`text-2xl font-bold font-secondary ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Mindor Tech
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`nav-link relative font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-text-primary hover:text-primary' : 'text-white hover:text-primary-light'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className={`hidden md:block btn btn-primary rounded-full px-6 py-2.5 text-sm font-semibold ${
              isScrolled ? 'shadow-md' : 'shadow-lg'
            }`}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
          initial={false}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block py-2 font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-text-primary hover:text-primary' : 'text-white hover:text-primary-light'
                }`}
              >
                {link.text}
              </a>
            ))}
            <button
              className="btn btn-primary w-full rounded-full px-6 py-3 text-sm font-semibold"
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navbar; 