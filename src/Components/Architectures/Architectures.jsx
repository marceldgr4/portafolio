import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { getImageUrl } from '../../utils';
import styles from './Architectures.module.css';

const ARCH_ICONS = [
  { icon: 'arquitecturas/mvc.png',   color: 'blue'   },
  { icon: 'arquitecturas/mvvm.png',  color: 'purple' },
  { icon: 'arquitecturas/micro.png', color: 'green'  },
];

export const Architectures = () => {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const items = t.architectures.items;

  return (
    <section className={styles.container} id="architectures" aria-labelledby="arch-title">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
          <div className={styles.decorationLine} />
        </div>
        <h2 id="arch-title" className={styles.title}>
          {t.architectures.title}
        </h2>
        <p className={styles.subtitle}>{t.architectures.subtitle}</p>
      </div>

      {/* Grid de arquitecturas */}
      <div className={styles.grid}>
        {items.map((arq, index) => {
          const meta = ARCH_ICONS[index] || { icon: 'arquitecturas/mvc.png', color: 'blue' };
          return (
            <article
              key={arq.nombre}
              className={`${styles.card} ${styles[`card${meta.color}`]} ${activeIndex === index ? styles.cardActive : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Glow decorativo */}
              <div className={styles.cardGlow} aria-hidden="true" />

              {/* Icono */}
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconBg} ${styles[`iconBg${meta.color}`]}`} aria-hidden="true" />
                <img
                  src={getImageUrl(meta.icon)}
                  alt={arq.nombre}
                  className={styles.icon}
                  loading="lazy"
                />
              </div>

              {/* Contenido textual */}
              <div className={styles.cardBody}>
                <h3 className={styles.archName}>{arq.nombre}</h3>
                <p className={styles.archTitle}>{arq.titulo}</p>
                <p className={styles.archDescription}>{arq.descripcion}</p>
              </div>

              {/* Badge de nivel */}
              <span className={`${styles.level} ${styles[`level${meta.color}`]}`}>
                {arq.nivel}
              </span>
            </article>
          );
        })}
      </div>

      {/* Decoración de fondo */}
      <div className={styles.bgDeco} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>
    </section>
  );
};
