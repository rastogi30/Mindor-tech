import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';
import AIDevelopmentSuccess from '@/components/aicomponents/developement';
import Tech4 from 'svgs/tech-stacks/tech4';
import Loader from '@/components/Loader';

const RPA: React.FC = () => {
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
      <Landing variant="rpa" />
      <Mindor variant="rpa" />
      <AIDevelopmentSuccess variant="rpa" />
      <Slider variant="rpa" />
      <ChooseUs variant="rpa" />
      <Business variant="rpa" />    
      <Process variant="rpa" />
      <Tech4 />
      <FAQ variant="rpa" />
    </div>
  )
}

export default RPA
