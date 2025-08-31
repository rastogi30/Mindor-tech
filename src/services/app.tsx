import React from 'react'
import Navbar from '@/components/Navbar'
import Landing from '@/components/webcomponents/landing'

const App: React.FC = () => {
    return(
        <div className='mt-7'>
            <Navbar/>
            <Landing variant='app'/>
        </div>
    )
}

export default App;