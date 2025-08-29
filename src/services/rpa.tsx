import react from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import Slider from '@/components/Slider';
import Process from '@/components/blockcomponents/process';
import FAQ from '@/components/webcomponents/faq';
import ChooseUs from '@/components/webcomponents/chooseus';
import Business from '@/components/Business';

const RPA: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="rpa" />
      <Mindor variant="rpa" />
      <Slider variant="rpa" />
      <ChooseUs variant="rpa" />
      <Business variant="rpa" />    
      <Process variant="rpa" />
      <FAQ variant="rpa" />
    </div>
  )
}

export default RPA
