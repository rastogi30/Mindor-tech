import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';    
import Footer from '@/components/Footer';
import FAQ from '@/components/webcomponents/faq';

const Webd: React.FC = () => {
  return (
    <div className=" ">
      <Navbar />
      <Services />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default Webd;