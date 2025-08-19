import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';

const Hero = dynamic(() => import('../src/components/Hero'));
const WhyMindor = dynamic(() => import('../src/components/WhyMindor'));
const Contact = dynamic(() => import('../src/components/Contact'));
const Footer = dynamic(() => import('../src/components/Footer'));
const SuccessModal = dynamic(() => import('../src/components/SuccessModal'));
const CTASection = dynamic(() => import('../src/components/CTASection'));

const HomePage: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  useEffect(() => {
    // Check if user returned from FormSubmit.co
    if (window.location.hash === '#success') {
      setShowSuccessModal(true);
      // Clean up the URL
      history.replaceState('', '', window.location.pathname);
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

  const scrollToSection = (sectionId: string): void => {
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
    <div className="min-h-screen flex flex-col">
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <WhyMindor />
        <Contact setShowSuccessModal={setShowSuccessModal} />
        <SuccessModal 
          isOpen={showSuccessModal} 
          onClose={() => setShowSuccessModal(false)} 
        />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage; 