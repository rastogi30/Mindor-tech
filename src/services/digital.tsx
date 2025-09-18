import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import Chooseus from '@/components/digitalcomponents/Chooseus';
import Need from '@/components/digitalcomponents/Need';
import Home from '@/components/digitalcomponents/Solution';
import Loader from '@/components/Loader';

const Digital: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
      const handleClick = () => {
          setShowLoader(true);
          setTimeout(() => setShowLoader(false), 4000); // Show loader for 4 seconds
      };

      document.addEventListener('click', handleClick);

      return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className='mt-7'>
      {showLoader && <Loader />}
      <Navbar />
      <Landing variant='digital' />
      <Need/>
      <Home />
      <Slider variant='digital' />
      <Process variant='digital' />
      <Chooseus />
      <FAQ variant='digital' />
    </div>
  );
};

export default Digital;
