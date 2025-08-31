import React from 'react'
import Navbar from '@/components/Navbar'
import Landing from '@/components/webcomponents/landing'
import ChooseUs from '@/components/webcomponents/chooseus'
import Process from '@/components/blockcomponents/process'

const App: React.FC = () => {
    return(
        <div className='mt-7'>
            <Navbar/>
            <Landing variant='app'/>
            <ChooseUs variant='app'/>
            <Process variant='app'/>
        </div>
    )
}

export default App;