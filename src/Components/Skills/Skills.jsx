import React, { useState } from 'react';
import skillsData from "../../data/skills.json";
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from "./Skills.module.css";

export const Skills = () => {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');

  const filterOptions = [
    { key: 'all',      label: t.skills?.filterAll    || 'Todas'        },
    { key: 'frontend', label: t.skills?.filterFront  || 'Frontend'     },
    { key: 'backend',  label: t.skills?.filterBack   || 'Backend & DB' },
    { key: 'mobile',   label: t.skills?.filterMobile || 'Mobile'       },
    { key: 'tools',    label: t.skills?.filterTools  || 'Herramientas' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className={styles.container} id="skills" aria-labelledby="skills-title">
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerDecoration} aria-hidden="true">
          <div className={styles.decorationLine} />
          <div className={styles.decorationDot} />
          <div className={styles.decorationLine} />
        </div>
        <h2 id="skills-title" className={styles.title}>
          {t.skills?.title || 'Habilidades y Tecnologías'}
        </h2>
        <p className={styles.subtitle}>
          {t.skills?.subtitle || 'Herramientas y tecnologías que implemento para el desarrollo de proyectos de software.'}
        </p>
      </div>

      {/* Categorías / Filtros */}
      <div className={styles.filters} role="tablist" aria-label="Filtrar tecnologías por categoría">
        {filterOptions.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={activeCategory === key}
            className={`${styles.filterBtn} ${activeCategory === key ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveCategory(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid de Tecnologías */}
      <div className={styles.skillsGrid}>
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.title}
            className={styles.skillCard}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.iconGlow} aria-hidden="true" />
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.icon}
                loading="lazy"
              />
            </div>
            <p className={styles.skillName}>{skill.title}</p>
            {skill.category && (
              <span className={styles.categoryBadge}>{skill.category}</span>
            )}
          </div>
        ))}
      </div>

      {/* Contador */}
      <div className={styles.counter}>
        <span>{filteredSkills.length} {t.skills?.countLabel || 'tecnologías'}</span>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className={styles.bgElements} aria-hidden="true">
        <div className={styles.floatingCircle1} />
        <div className={styles.floatingCircle2} />
      </div>
    </section>
  );
};
