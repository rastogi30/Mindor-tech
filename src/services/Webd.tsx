import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';    

import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';
import Timeline from '@/components/webcomponents/timeline';
import Business from '@/components/Business';
import Mindor from '@/components/Mindor';
import Landing from '@/components/webcomponents/landing';
import Tech1 from 'svgs/tech-stacks/tech1';
import Loader from '@/components/Loader';

const Webd: React.FC = () => {
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
    <div className="mt-7">
      {showLoader && <Loader />}
      <Navbar />
      <Landing />
      <Mindor variant="service" />
      <Services />
      <Timeline />
      <Business variant="services" />
      <ChooseUs />
      <Tech1 />
      <FAQ />
    </div>
  );
};

export default Webd;