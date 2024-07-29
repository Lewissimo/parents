// pages/index.tsx
import { useState, useEffect } from 'react';
import Heart from '../components/Heart';
import ProgressBar from '../components/ProgressBar';
import Brawa from '@/components/Brawa';
import AnimW from '@/components/AnimW';

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setShowCongrats(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress(prevProgress => Math.max(prevProgress - 1, 0));
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  const handleHeartClick = () => {
    setProgress(prevProgress => Math.min(prevProgress + 10, 100));
  };

  return (
    <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '50px', height:'100vh', width:'100%' }}>
      {
      showCongrats ?
      <>
      <div style={{
        fontSize: '2em'
      }}>

      <AnimW value='Kochamy Was Rodzice <3'/>
      </div>
      <div style={{marginTop: '82px'}}>

      <Brawa />
      </div>
      </>
      :
      <>
        <Heart onClick={handleHeartClick} />
      <ProgressBar progress={progress} />
      </>
      }
    </div>
  );
};

export default Home;
