import React from 'react'
import Navbar from '@/components/Navbar'
import Landing from '@/components/webcomponents/landing'
import ChooseUs from '@/components/webcomponents/chooseus'
import Process from '@/components/blockcomponents/process'
import FAQ from '@/components/webcomponents/faq'
import AIDevelopmentSuccess from '@/components/aicomponents/developement'
import Mindor from '@/components/Mindor'
import Business from '@/components/Business'

const App: React.FC = () => {
    return(
        <div className='mt-7'>
            <Navbar/>
            <Landing variant='app'/>
            <Mindor variant='app'/>
            <AIDevelopmentSuccess variant='app'/>
            <ChooseUs variant='app'/>
            <Process variant='app'/>
            <Business variant='app'/>
            <FAQ variant='app'/>
        </div>
    )
}

export default App;