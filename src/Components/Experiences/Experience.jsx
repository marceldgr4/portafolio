import React, { useState } from 'react';
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

export const Experience = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeHistory, setActiveHistory] = useState(null);
  const [activeArq, setActiveArq] = useState(null);

  const arquitecturas = [
    {
      id: 1,
      nombre: "MVC",
      titulo: "Modelo-Vista-Controlador",
      descripcion: "Patrón de diseño que separa la lógica de negocio, la interfaz y el control de flujo",
      nivel: "Intermedio",
      color: "blue",
      icon: "🏗️"
    },
    {
      id: 2,
      nombre: "MVVM",
      titulo: "Modelo-Vista-VistaModelo",
      descripcion: "Arquitectura que facilita el enlace de datos entre UI y lógica de negocio",
      nivel: "Intermedio",
      color: "purple",
      icon: "🔄"
    },
    {
      id: 3,
      nombre: "Microservicios",
      titulo: "Arquitectura Distribuida",
      descripcion: "Sistema de servicios independientes que se comunican entre sí",
      nivel: "Básico",
      color: "green",
      icon: "🌐"
    }
  ];

  return (
    <section className={styles.container} id="Experience">
      {/* Header mejorado */}
      <div className={styles.header}>
        <div className={styles.headerDecoration}>
          <div className={styles.decorationLine}></div>
          <div className={styles.decorationDot}></div>
          <div className={styles.decorationLine}></div>
        </div>
        <h1 className={styles.title}>Experiencia y Habilidades</h1>
        <p className={styles.subtitle}>
          Estas son algunas herramientas que implementé para el desarrollo de proyectos que 
          llevé a cabo durante mi proceso de formación académica, en las cuales adquirí 
          experiencia de nivel básico e intermedio.
        </p>
      </div>

      <div className={styles.content}>
        {/* Sección de Skills */}
        <div className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>⚡</span>
              Tecnologías
            </h2>
            <span className={styles.skillCount}>{skills.length} tecnologías</span>
          </div>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div
                key={id}
                className={`${styles.skill} ${activeSkill === id ? styles.skillActive : ''}`}
                onMouseEnter={() => setActiveSkill(id)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className={styles.skillImageContainer}>
                  <div className={styles.skillGlow}></div>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p className={styles.skillTitle}>{skill.title}</p>
                {activeSkill === id && (
                  <div className={styles.skillTooltip}>Ver más</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Historia Laboral */}
        <div className={styles.historySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleIcon}>💼</span>
              Experiencia Laboral
            </h2>
            <span className={styles.historyCount}>{history.length} experiencias</span>
          </div>
          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <li
                key={id}
                className={`${styles.historyItem} ${activeHistory === id ? styles.historyItemActive : ''}`}
                onMouseEnter={() => setActiveHistory(id)}
                onMouseLeave={() => setActiveHistory(null)}
              >
                {/* Timeline dot */}
                <div className={styles.timelineDot}></div>
                
                {/* Icono de la empresa */}
                <div className={styles.companyIconWrapper}>
                  <div className={styles.companyIconBackground}></div>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>

                {/* Detalles */}
                <div className={styles.historyItemDetails}>
                  <div className={styles.historyHeader}>
                    <h3 className={styles.historyRole}>{historyItem.role}</h3>
                    <span className={styles.historyOrganisation}>{historyItem.organisation}</span>
                  </div>
                  <p className={styles.historyDate}>
                    <span className={styles.dateIcon}>📅</span>
                    {historyItem.startDate} - {historyItem.endDate}
                  </p>
                  <ul className={styles.experiencesList}>
                    {historyItem.experiences.map((experience, idx) => (
                      <li key={idx} className={styles.experienceItem}>
                        <span className={styles.experienceIcon}>▹</span>
                        {experience}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sección de Arquitecturas */}
      <div className={styles.arqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>🏛️</span>
            Arquitecturas de Software
          </h2>
          <p className={styles.arqSubtitle}>Patrones y metodologías aplicadas</p>
        </div>
        <div className={styles.arqList}>
          {arquitecturas.map((arq, index) => (
            <div
              key={arq.id}
              className={`${styles.arqItem} ${styles[`arqItem${arq.color}`]} ${
                activeArq === index ? styles.arqItemActive : ''
              }`}
              onMouseEnter={() => setActiveArq(index)}
              onMouseLeave={() => setActiveArq(null)}
            >
              <div className={styles.arqIcon}>{arq.icon}</div>
              <h3 className={styles.arqNombre}>{arq.nombre}</h3>
              <p className={styles.arqTitulo}>{arq.titulo}</p>
              <p className={styles.arqDescription}>{arq.descripcion}</p>
              <span className={`${styles.level} ${styles[`level${arq.color}`]}`}>
                {arq.nivel}
              </span>
              <div className={styles.arqGlow}></div>
            </div>
          ))}
        </div>
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