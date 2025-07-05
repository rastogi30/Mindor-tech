import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import SuccessModal from './components/SuccessModal.jsx';

function App() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Check if user returned from FormSubmit.co
    if (window.location.hash === '#success') {
      setShowSuccessModal(true);
      // Clean up the URL
      history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <FAQ />
      <Contact setShowSuccessModal={setShowSuccessModal} />
      <Footer />
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
}

export default App; 