import React, { useState } from 'react';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project, labels = {} }) => {
  const { title, imageSrc, description, skills, demo, source } = project;
  const [isHovered, setIsHovered] = useState(false);
  const isExternalDemo = demo?.startsWith('http');

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
          alt={`Preview of ${title}`} 
          className={styles.image}
          loading="lazy"
        />
        <div className={`${styles.imageOverlay} ${isHovered ? styles.imageOverlayActive : ''}`} aria-hidden="true">
          <div className={styles.overlayContent}>
            <span className={styles.viewProject}>{labels.viewProject || "Ver Proyecto"}</span>
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
                <span className={styles.skillDot} aria-hidden="true" />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className={styles.links}>
          {isExternalDemo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.linkDemo}`}
            >
              <span className={styles.linkIcon} aria-hidden="true">▶</span>
              <span>{labels.demo || "Demo"}</span>
            </a>
          ) : (
            <Link to={demo} className={`${styles.link} ${styles.linkDemo}`}>
              <span className={styles.linkIcon} aria-hidden="true">▶</span>
              <span>{labels.demo || "Demo"}</span>
            </Link>
          )}
          
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.linkSource}`}
          >
            <span className={styles.linkIcon} aria-hidden="true">⌘</span>
            <span>{labels.source || "Source"}</span>
          </a>
        </div>
      </div>

      {/* Efecto de brillo en el borde */}
      <div className={styles.glowEffect} aria-hidden="true" />
    </div>
  );
};