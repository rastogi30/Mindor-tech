import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';    
import Footer from '@/components/Footer';


const Webd: React.FC = () => {
  return (
    <div className=" ">
      <Navbar />
      <Services />
      <Footer/>
    </div>
  );
};

export default Webd;