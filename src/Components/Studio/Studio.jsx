import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Studio.module.css";

export const Studio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const estudios = [
    {
      id: 1,
      icon: "studio/univer.png",
      iconAlt: "universidad",
      tipo: "UNIVERSITARIO",
      institucion: "Universidad del Magdalena",
      programa: "Ingeniería de Sistemas",
      descripcion: "Formación integral en desarrollo de software, gestión de proyectos y soluciones tecnológicas.",
      color: "blue"
    },
    {
      id: 2,
      icon: "studio/BD.png",
      iconAlt: "base de datos",
      tipo: "TÉCNICO",
      institucion: "Servicio Nacional de Aprendizaje - SENA",
      programa: "Base de Datos",
      cursos: [
        "Construcción de Base de datos con MySQL",
        "Base de datos generalidades y sistema de gestión"
      ],
      color: "purple"
    }
  ];

  return (
    <section className={styles.container} id="Studio">
      {/* Header con decoración */}
      <div className={styles.header}>
        <div className={styles.headerDecoration}>
          <div className={styles.decorationLine}></div>
          <div className={styles.decorationDot}></div>
          <div className={styles.decorationLine}></div>
        </div>
        <h2 className={styles.title}>Estudios</h2>
        <p className={styles.subtitle}>
          Mi trayectoria académica y formación profesional
        </p>
      </div>

      {/* Grid de estudios */}
      <div className={styles.content}>
        <ul className={styles.studyList}>
          {estudios.map((estudio, index) => (
            <li
              key={estudio.id}
              className={`${styles.studyCard} ${styles[`studyCard${estudio.color}`]} ${
                hoveredIndex === index ? styles.studyCardHovered : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Efecto de brillo */}
              <div className={styles.cardGlow}></div>

              {/* Badge de tipo */}
              <div className={`${styles.badge} ${styles[`badge${estudio.color}`]}`}>
                {estudio.tipo}
              </div>

              {/* Icono */}
              <div className={styles.iconWrapper}>
                <div className={styles.iconBackground}></div>
                <img
                  src={getImageUrl(estudio.icon)}
                  alt={estudio.iconAlt}
                  className={styles.icon}
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
                        <span className={styles.cursoIcon}>✓</span>
                        <span>{curso}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Indicador de hover */}
              <div className={styles.hoverIndicator}>
                <span>Ver más</span>
                <span className={styles.arrow}>→</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Decoración de fondo */}
      <div className={styles.backgroundDecoration}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </section>
  );
};