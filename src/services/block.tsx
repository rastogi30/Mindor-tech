import React from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import FAQ from '@/components/webcomponents/faq';


const Block: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="blockchain" />
      <Mindor variant="blockchain" />
      <FAQ variant="blockchain" />
    </div>
  );
};

export default Block;
