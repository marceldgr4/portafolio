import React, { useState } from 'react';
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from "./Experience.module.css";

export const Experience = () => {
  const { t } = useLang();
  const [activeHistory, setActiveHistory] = useState(null);
  const items = t.experience?.items || history;

  return (
    <section className={styles.container} id="experience" aria-labelledby="experience-title">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
          <div className={styles.decorationLine} />
        </div>
        <h2 id="experience-title" className={styles.title}>
          {t.experience?.title || 'Experiencia Laboral'}
        </h2>
        <p className={styles.subtitle}>
          {t.experience?.subtitle || 'Mi trayectoria profesional y proyectos empresariales en los que he participado.'}
        </p>
      </div>

      {/* Timeline de Historia Laboral */}
      <div className={styles.content}>
        <div className={styles.historySection}>
          <div className={styles.sectionHeader}>
            <span className={styles.historyCount}>
              {items.length} {t.experience?.countLabel || 'experiencias'}
            </span>
          </div>

          <ul className={styles.history} role="list">
            {items.map((historyItem, id) => (
              <li
                key={id}
                className={`${styles.historyItem} ${activeHistory === id ? styles.historyItemActive : ''}`}
                onMouseEnter={() => setActiveHistory(id)}
                onMouseLeave={() => setActiveHistory(null)}
              >
                {/* Timeline dot */}
                <div className={styles.timelineDot} aria-hidden="true" />

                {/* Icono de la empresa */}
                <div className={styles.companyIconWrapper}>
                  <div className={styles.companyIconBackground} aria-hidden="true" />
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                    className={styles.companyLogo}
                    loading="lazy"
                  />
                </div>

                {/* Detalles */}
                <div className={styles.historyItemDetails}>
                  <div className={styles.historyHeader}>
                    <h3 className={styles.historyRole}>{historyItem.role}</h3>
                    <span className={styles.historyOrganisation}>{historyItem.organisation}</span>
                  </div>

                  <p className={styles.historyDate}>
                    <span className={styles.dateIcon} aria-hidden="true">📅</span>
                    {historyItem.startDate} - {historyItem.endDate}
                  </p>

                  <ul className={styles.experiencesList}>
                    {historyItem.experiences.map((exp, idx) => (
                      <li key={idx} className={styles.experienceItem}>
                        <span className={styles.experienceIcon} aria-hidden="true">▹</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
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