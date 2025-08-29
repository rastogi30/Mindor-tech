import React from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import FAQ from '@/components/webcomponents/faq';
import Business from '@/components/Business';
import Process from '@/components/blockcomponents/process';
import Slider from '@/components/Slider';
import AIDevelopmentSuccess from '@/components/aicomponents/developement';

const Block: React.FC = () => {
  return (
    <div className='mt-7'>
      <Navbar />
      <Landing variant="blockchain" />
      <Mindor variant="blockchain" />
      <Slider variant="blockchain" />
      <AIDevelopmentSuccess variant="blockchain" />
      <Process/>
      <Business variant="blockchain" />
      <FAQ variant="blockchain" />
    </div>
  );
};

export default Block;
