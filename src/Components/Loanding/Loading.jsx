import React from 'react';
import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <div className={styles.doubleBounce1}></div>
        <div className={styles.doubleBounce2}></div>
      </div>
      <p className={styles.loadingText}>Cargando...</p>
    </div>
  );
};