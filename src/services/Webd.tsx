import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/webcomponents/services';     

const Webd: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Navbar />
      <Services />
    </div>
  );
};

export default Webd;