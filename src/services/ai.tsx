import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Choose from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';

const AI: React.FC = () => {
    return (
        <div className='mt-7'>
            <Navbar />
            <Landing variant="ai" />
            <Choose variant="ai" />
            <Business variant="ai" />
        </div>
    );
};

export default AI;
