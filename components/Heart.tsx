import { useState, useEffect } from 'react';
import styles from './Heart.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Heart = ({ onClick }: { onClick: () => void }) => {
  const [size, setSize] = useState(.3);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSize(prevSize => Math.max(prevSize - .01,.3));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setSize(prevSize => Math.min(prevSize + .1, 2));
    onClick();
  };

  return (
    <div className={styles.heart} style={{transform: `scale(${size})`}} onClick={handleClick}><FavoriteIcon sx={{
        fontSize: '5em',
        color: 'red'
    }}/></div>
  );
};

export default Heart;
