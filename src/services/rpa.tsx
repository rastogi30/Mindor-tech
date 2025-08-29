import react from 'react'
import Navbar from '@/components/Navbar';
import Landing from '@/components/webcomponents/landing';

const RPA: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Landing variant="rpa" />
    </div>
  )
}

export default RPA
