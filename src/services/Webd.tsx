import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';    
import Footer from '@/components/Footer';
import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';
import Timeline from '@/components/webcomponents/timeline';
import Business from '@/components/Business';
import Mindor from '@/components/Mindor';
import Landing from '@/components/webcomponents/landing';
import Tech1 from 'svgs/tech-stacks/tech1';

const Webd: React.FC = () => {
  return (
    <div className="mt-7">
      <Navbar />
      <Landing />
      <Mindor variant="service" />
      <Services />
      <Timeline />
      <Business variant="services" />
      <ChooseUs />
      <Tech1 />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Webd;