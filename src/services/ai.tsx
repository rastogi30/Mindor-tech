import React from 'react';
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';

const AI: React.FC = () => {
    return (
        <div className='mt-7'>
            <Navbar />
            <Landing variant="ai" />
        </div>
    );
};

export default AI;
