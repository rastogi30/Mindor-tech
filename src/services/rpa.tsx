import react from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';
import Mindor from '@/components/Mindor';
import Slider from '@/components/Slider';

const RPA: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="rpa" />
      <Mindor variant="rpa" />
      <Slider variant="rpa" />
    </div>
  )
}

export default RPA
