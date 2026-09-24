import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import es from '../locales/es';
import en from '../locales/en';

const LOCALES = { es, en };

const LanguageContext = createContext(null);

/**
 * Proveedor del contexto de idioma con persistencia en localStorage.
 * Cambia dinámicamente todo el contenido textual visible del portafolio.
 */
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved && LOCALES[saved]) return saved;
      // Detección automática por navegador si no hay guardado
      const browserLang = navigator.language?.slice(0, 2);
      return browserLang === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // Ignorar errores de sandbox/cookies deshabilitadas
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const setLanguage = useCallback((code) => {
    if (LOCALES[code]) setLang(code);
  }, []);

  const t = LOCALES[lang] || es;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook para consumir el contexto de idioma.
 * Uso: const { t, lang, toggleLang, setLanguage } = useLang();
 */
export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
};
