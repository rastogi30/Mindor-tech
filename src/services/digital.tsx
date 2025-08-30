import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';

const Digital: React.FC = () => {
  return (
    <div className='mt-7'>
      <Navbar />
      <Landing variant='digital'/>
      <Slider variant='digital'/>
      <Process variant='digital'/>
    </div>
  );
};

export default Digital;
