import React, { useState } from 'react';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con overlay */}
      <div className={styles.imageWrapper}>
        <img 
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`} 
          className={styles.image}
        />
        <div className={`${styles.imageOverlay} ${isHovered ? styles.imageOverlayActive : ''}`}>
          <div className={styles.overlayContent}>
            <span className={styles.viewProject}>Ver Proyecto</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className={styles.content}>
        {/* Título y descripción */}
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Skills */}
        <div className={styles.skillsSection}>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                <span className={styles.skillDot}></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className={styles.links}>
          <Link to={demo} className={`${styles.link} ${styles.linkDemo}`}>
            <span className={styles.linkIcon}>▶</span>
            <span>Demo</span>
          </Link>
          <a href={source} className={`${styles.link} ${styles.linkSource}`}>
            <span className={styles.linkIcon}>⌘</span>
            <span>Source</span>
          </a>
        </div>
      </div>

      {/* Efecto de brillo en el borde */}
      <div className={styles.glowEffect}></div>
    </div>
  );
};