import React from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';


const Block: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="blockchain" />
    </div>
  );
};

export default Block;
