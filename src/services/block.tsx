import React from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';


const Block: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="blockchain" />
      <Mindor variant="blockchain" />
    </div>
  );
};

export default Block;
