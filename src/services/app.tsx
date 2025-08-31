import React from 'react'
import Navbar from '@/components/Navbar'
import Landing from '@/components/webcomponents/landing'
import ChooseUs from '@/components/webcomponents/chooseus'

const App: React.FC = () => {
    return(
        <div className='mt-7'>
            <Navbar/>
            <Landing variant='app'/>
            <ChooseUs variant='app'/>
        </div>
    )
}

export default App;