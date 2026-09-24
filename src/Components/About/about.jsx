import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from "./about.module.css";

const ABOUT_ICONS = [
  { icon: "about/usuario.png",     iconAlt: "personal"     },
  { icon: "about/profesional.png", iconAlt: "profesional" },
];

export const About = () => {
  const { t } = useLang();
  const [activeCard, setActiveCard] = useState(null);

  const items = t.about?.items || [];

  return (
    <section className={styles.container} id="about-content" aria-labelledby="about-title">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
          <div className={styles.decorationLine} />
        </div>
        <h2 id="about-title" className={styles.title}>
          {t.about?.title || 'Acerca de mí'}
        </h2>
        <p className={styles.subtitle}>
          {t.about?.subtitle || 'Conoce más sobre mi perfil personal y profesional'}
        </p>
      </div>

      {/* Contenido principal */}
      <div className={styles.content}>
        <ul className={styles.aboutItems} role="list">
          {items.map((item, index) => {
            const meta = ABOUT_ICONS[index] || ABOUT_ICONS[0];
            return (
              <li
                key={item.id || index}
                className={`${styles.aboutItem} ${styles[`aboutItem${item.color}`]} ${
                  activeCard === index ? styles.aboutItemActive : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Efectos de fondo */}
                <div className={styles.cardBackground} aria-hidden="true">
                  <div className={styles.cardGradient} />
                  <div className={styles.cardShine} />
                </div>

                {/* Badge con número */}
                <div className={`${styles.badge} ${styles[`badge${item.color}`]}`} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icono */}
                <div className={styles.iconWrapper}>
                  <div className={`${styles.iconBackground} ${styles[`iconBackground${item.color}`]}`} aria-hidden="true" />
                  <img
                    src={getImageUrl(meta.icon)}
                    alt={meta.iconAlt}
                    className={styles.iconos}
                    loading="lazy"
                  />
                </div>

                {/* Contenido del texto */}
                <div className={styles.aboutItemText}>
                  <h3 className={styles.itemTitle}>{item.titulo}</h3>
                  <p className={styles.itemDescription}>{item.descripcion}</p>

                  {/* Tags de cualidades o tecnologías */}
                  {item.cualidades && (
                    <div className={styles.tagsList}>
                      {item.cualidades.map((cualidad, idx) => (
                        <span key={idx} className={`${styles.tag} ${styles.tagPersonal}`}>
                          <span className={styles.tagIcon} aria-hidden="true">✓</span>
                          {cualidad}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.tecnologias && (
                    <div className={styles.tagsList}>
                      {item.tecnologias.map((tech, idx) => (
                        <span key={idx} className={`${styles.tag} ${styles.tagTech}`}>
                          <span className={styles.tagIcon} aria-hidden="true">⚡</span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Indicador de interacción */}
                <div className={styles.interactionIndicator}>
                  <span className={styles.indicatorText}>{t.about?.exploreMore || 'Explora más'}</span>
                  <span className={styles.indicatorArrow} aria-hidden="true">↗</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className={styles.backgroundElements} aria-hidden="true">
        <div className={styles.floatingCircle1} />
        <div className={styles.floatingCircle2} />
        <div className={styles.floatingCircle3} />
      </div>
    </section>
  );
};