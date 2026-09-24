import React from 'react';
import { useLang } from '../../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

/**
 * Selector de idioma (ES | EN).
 * Se integra en la Navbar tanto en desktop como en mobile.
 */
export const LanguageSwitcher = ({ mobile = false }) => {
  const { lang, setLanguage } = useLang();

  return (
    <div
      className={`${styles.switcher} ${mobile ? styles.switcherMobile : ''}`}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        className={`${styles.btn} ${lang === 'es' ? styles.active : ''}`}
        onClick={() => setLanguage('es')}
        aria-pressed={lang === 'es'}
        aria-label="Español"
        title="Español"
      >
        ES
      </button>
      <span className={styles.divider} aria-hidden="true">|</span>
      <button
        className={`${styles.btn} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
        title="English"
      >
        EN
      </button>
    </div>
  );
};
