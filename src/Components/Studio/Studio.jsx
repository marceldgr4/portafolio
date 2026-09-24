import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from "./Studio.module.css";

const STUDIO_METAS = [
  { icon: "studio/university.png", iconAlt: "universidad", color: "blue"   },
  { icon: "studio/backend.png",    iconAlt: "base de datos", color: "purple" },
  { icon: "studio/java.png",       iconAlt: "java",         color: "purple" },
  { icon: "studio/devops.png",     iconAlt: "scrum",        color: "purple" },
  { icon: "studio/pruebas.png",    iconAlt: "qa testing",   color: "purple" },
];

export const Studio = () => {
  const { t } = useLang();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = t.studio?.items || [];

  return (
    <section className={styles.container} id="studio-content" aria-labelledby="studio-title">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
          <div className={styles.decorationLine} />
        </div>
        <h2 id="studio-title" className={styles.title}>
          {t.studio?.title || 'Estudios'}
        </h2>
        <p className={styles.subtitle}>
          {t.studio?.subtitle || 'Mi trayectoria académica y formación profesional'}
        </p>
      </div>

      {/* Grid de estudios */}
      <div className={styles.content}>
        <ul className={styles.studyList} role="list">
          {items.map((estudio, index) => {
            const meta = STUDIO_METAS[index] || STUDIO_METAS[0];
            const color = estudio.color || meta.color;
            return (
              <li
                key={estudio.id || index}
                className={`${styles.studyCard} ${styles[`studyCard${color}`]} ${
                  hoveredIndex === index ? styles.studyCardHovered : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow */}
                <div className={styles.cardGlow} aria-hidden="true" />

                {/* Badge de tipo */}
                <div className={`${styles.badge} ${styles[`badge${color}`]}`}>
                  {estudio.tipo}
                </div>

                {/* Icono */}
                <div className={styles.iconWrapper}>
                  <div className={styles.iconBackground} aria-hidden="true" />
                  <img
                    src={getImageUrl(meta.icon)}
                    alt={meta.iconAlt}
                    className={styles.icon}
                    loading="lazy"
                  />
                </div>

                {/* Contenido */}
                <div className={styles.cardContent}>
                  <h3 className={styles.institucion}>{estudio.institucion}</h3>
                  <h4 className={styles.programa}>{estudio.programa}</h4>

                  {estudio.descripcion && (
                    <p className={styles.descripcion}>{estudio.descripcion}</p>
                  )}

                  {estudio.cursos && (
                    <ul className={styles.cursosList}>
                      {estudio.cursos.map((curso, idx) => (
                        <li key={idx} className={styles.curso}>
                          <span className={styles.cursoIcon} aria-hidden="true">✓</span>
                          <span>{curso}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Indicador */}
                <div className={styles.hoverIndicator}>
                  <span>{t.studio?.verMas || 'Ver más'}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Decoración de fondo */}
      <div className={styles.backgroundDecoration} aria-hidden="true">
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </div>
    </section>
  );
};