import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navbar from '../src/components/Navbar';

const Hero = dynamic(() => import('../src/components/Hero'));
const WhyMindor = dynamic(() => import('../src/components/WhyMindor'));
const Footer = dynamic(() => import('../src/components/Footer'));
const SuccessModal = dynamic(() => import('../src/components/SuccessModal'));
const CTASection = dynamic(() => import('../src/components/CTASection'));
const Founder = dynamic(() => import('../src/components/Founder'));
const Business  = dynamic(() => import('../src/components/Business'));
const Mindor = dynamic(() => import('../src/components/Mindor'));
const Service = dynamic(() => import('../src/components/Service'));
const LandingPage = dynamic(()=> import('../pages/landing')); 

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
      <main className="flex-1">
        {/* <Hero scrollToSection={scrollToSection} /> */}
        {/* <WhyMindor /> */}
        {/* <Contact setShowSuccessModal={setShowSuccessModal} /> */}
        <SuccessModal 
          isOpen={showSuccessModal} 
          onClose={() => setShowSuccessModal(false)} 
        />
        <LandingPage />
        <Mindor />
        <Service />
        <Business />
        <Founder />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage; 