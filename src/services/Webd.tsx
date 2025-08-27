import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';    
import Footer from '@/components/Footer';
import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';

const Webd: React.FC = () => {
  return (
    <div className=" ">
      <Navbar />
      <Services />
      <ChooseUs />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Webd;