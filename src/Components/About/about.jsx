import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./about.module.css";

export const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  const aboutData = [
    {
      id: 1,
      icon: "about/person.png",
      iconAlt: "personal",
      titulo: "Nivel Personal",
      descripcion: "Me considero una persona curiosa, comprometida, sociable con buena disposición para trabajar en equipo. Disfruto escuchar, proponer ideas y generar un ambiente positivo, sin perder el enfoque en la calidad y el cumplimiento.",
      cualidades: ["Trabajo en equipo", "Comunicación", "Proactividad"],
      color: "blue"
    },
    {
      id: 2,
      icon: "about/diploma.png",
      iconAlt: "profesional",
      titulo: "Nivel Profesional",
      descripcion: "Disfruto trabajar en el desarrollo web y móvil, especialmente en la construcción de experiencias intuitivas y funcionales. Tengo experiencia en tecnologías como React, SwiftUI, Spring Boot. Me motiva poder combinar el diseño, la lógica y la arquitectura para entregar productos bien construidos y con una visión clara.",
      tecnologias: ["React", "SwiftUI", "Spring Boot"],
      color: "purple"
    }
  ];

  return (
    <section className={styles.container} id="About">
      {/* Header mejorado */}
      <div className={styles.header}>
        <div className={styles.headerDecoration}>
          <div className={styles.decorationLine}></div>
          <div className={styles.decorationDot}></div>
          <div className={styles.decorationLine}></div>
        </div>
        <h2 className={styles.title}>Acerca de mí</h2>
        <p className={styles.subtitle}>
          Conoce más sobre mi perfil personal y profesional
        </p>
      </div>

      {/* Contenido principal */}
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {aboutData.map((item, index) => (
            <li
              key={item.id}
              className={`${styles.aboutItem} ${styles[`aboutItem${item.color}`]} ${
                activeCard === index ? styles.aboutItemActive : ''
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Efectos de fondo */}
              <div className={styles.cardBackground}>
                <div className={styles.cardGradient}></div>
                <div className={styles.cardShine}></div>
              </div>

              {/* Badge con número */}
              <div className={`${styles.badge} ${styles[`badge${item.color}`]}`}>
                {String(item.id).padStart(2, '0')}
              </div>

              {/* Icono */}
              <div className={styles.iconWrapper}>
                <div className={`${styles.iconBackground} ${styles[`iconBackground${item.color}`]}`}></div>
                <img
                  src={getImageUrl(item.icon)}
                  alt={item.iconAlt}
                  className={styles.iconos}
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
                        <span className={styles.tagIcon}>✓</span>
                        {cualidad}
                      </span>
                    ))}
                  </div>
                )}

                {item.tecnologias && (
                  <div className={styles.tagsList}>
                    {item.tecnologias.map((tech, idx) => (
                      <span key={idx} className={`${styles.tag} ${styles.tagTech}`}>
                        <span className={styles.tagIcon}>⚡</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Indicador de interacción */}
              <div className={styles.interactionIndicator}>
                <span className={styles.indicatorText}>Explora más</span>
                <span className={styles.indicatorArrow}>↗</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.floatingCircle3}></div>
      </div>
    </section>
  );
};