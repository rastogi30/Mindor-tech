import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ scrollToSection, forceVisible = false }) => {
  const [isScrolled, setIsScrolled] = useState(forceVisible);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!forceVisible) {
            const currentScrollY = window.scrollY;
            // Only update state if there's a significant change (more than 10px difference)
            if (Math.abs(currentScrollY - lastScrollY) > 10) {
              setIsScrolled(currentScrollY > 20); // Increased threshold to 20px
              lastScrollY = currentScrollY;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial state based on forceVisible
    if (forceVisible) {
      setIsScrolled(true);
    } else {
      // Set initial scroll state
      setIsScrolled(window.scrollY > 20);
    }

    // Only add scroll listener if not forced visible
    if (!forceVisible) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      if (!forceVisible) {
        window.removeEventListener('scroll', handleScroll);
      }
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen, forceVisible]);

  // Effect to handle hash changes for highlighting
  useEffect(() => {
    const handleHashChange = () => {
      // Force re-render when hash changes
      // This is handled by the location object from useLocation
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { href: '#home', text: 'Home', isRoute: false },
    { href: '/services', text: 'Services', isRoute: true },
    { href: '/case-studies', text: 'Case Studies', isRoute: true },
    { href: '/about', text: 'About', isRoute: true },
    { href: '/careers', text: 'Careers', isRoute: true },
    { href: '#contact', text: 'Contact', isRoute: false },
  ];

  const handleNavClick = (link) => {
    if (link.isRoute) {
      // For route links, just close mobile menu
      setIsMobileMenuOpen(false);
    } else {
      // For scroll links, check if we're on home page
      if (location.pathname === '/') {
        // If on home page, just scroll to section
        scrollToSection(link.href.substring(1));
      } else {
        // If on other page, navigate to home page with hash
        window.location.href = `/${link.href}`;
      }
      setIsMobileMenuOpen(false);
    }
  };

  // Function to check if a link should be highlighted
  const isLinkActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.href;
    } else {
      // For scroll links, check if we're on home page and the hash matches
      return location.pathname === '/' && location.hash === link.href;
    }
  };



  return (
    <motion.header
      className={`mobile-menu-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        forceVisible || isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
              forceVisible || isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Mindor Tech
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              link.isRoute ? (
                <motion.div 
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-link relative font-medium transition-colors duration-300 group ${
                      forceVisible || isScrolled ? 'text-text-primary hover:text-primary' : 'text-white hover:text-primary-light'
                    } ${isLinkActive(link) ? 'text-primary' : ''}`}
                  >
                    {link.text}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light"
                      initial={{ width: isLinkActive(link) ? "100%" : 0 }}
                      animate={{ width: isLinkActive(link) ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className={`nav-link relative font-medium transition-colors duration-300 group ${
                    forceVisible || isScrolled ? 'text-text-primary hover:text-primary' : 'text-white hover:text-primary-light'
                  } ${isLinkActive(link) ? 'text-primary' : ''}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {link.text}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light"
                    initial={{ width: isLinkActive(link) ? "100%" : 0 }}
                    animate={{ width: isLinkActive(link) ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )
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
              forceVisible || isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              forceVisible || isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${
              forceVisible || isScrolled ? 'bg-text-primary' : 'bg-white'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <motion.nav
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-border/20 z-50 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={false}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            y: isMobileMenuOpen ? 0 : -10
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-6 space-y-4">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 font-medium transition-colors duration-300 rounded-lg hover:bg-background-light ${
                    isLinkActive(link) ? 'text-primary bg-primary/10' : 'text-text-primary hover:text-primary'
                  }`}
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className={`block py-3 px-4 font-medium transition-colors duration-300 rounded-lg hover:bg-background-light ${
                    isLinkActive(link) ? 'text-primary bg-primary/10' : 'text-text-primary hover:text-primary'
                  }`}
                >
                  {link.text}
                </a>
              )
            ))}
            <button
              className="btn btn-primary w-full rounded-full px-6 py-3 text-sm font-semibold mt-4"
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