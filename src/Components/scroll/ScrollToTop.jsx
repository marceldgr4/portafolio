import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroller.scrollTo('home', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTop}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
    </>
  );
};
