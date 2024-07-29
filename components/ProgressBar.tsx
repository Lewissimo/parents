// components/ProgressBar.tsx
import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
