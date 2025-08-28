import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Choose from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';
import Process from '@/components/aicomponents/process';

const AI: React.FC = () => {
    return (
        <div className='mt-7'>
            <Navbar />
            <Landing variant="ai" />
            <Choose variant="ai" />
            <Business variant="ai" />
            <Process />
        </div>
    );
};

export default AI;
