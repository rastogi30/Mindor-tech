import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import WhyMindor from '../src/components/WhyMindor.jsx';
import Contact from '../src/components/Contact.jsx';
import Footer from '../src/components/Footer.jsx';
import SuccessModal from '../src/components/SuccessModal.jsx';

const HomePage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Check if user returned from FormSubmit.co
    if (window.location.hash === '#success') {
      setShowSuccessModal(true);
      // Clean up the URL
      history.replaceState(null, null, window.location.pathname);
    }

    // Handle hash navigation for sections
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#success') {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashNavigation();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small offset to account for the fixed navbar
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <WhyMindor />
      <Contact setShowSuccessModal={setShowSuccessModal} />
      <Footer />
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
};

export default HomePage; 