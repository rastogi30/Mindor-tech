import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import Chooseus from '@/components/digitalcomponents/Chooseus';

const Digital: React.FC = () => {
  return (
    <div className='mt-7'>
      <Navbar />
      <Landing variant='digital'/>
      <Chooseus />
      <Slider variant='digital'/>
      <Process variant='digital'/>
      <FAQ variant='digital'/>
    </div>
  );
};

export default Digital;
