import React from 'react'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="Experience">
      <h1 className={styles.title}>Experiencia y Habilidades</h1>
      <p className={styles.subtitle}>
        Estas son algunas herramientas que implementé para el desarrollo de proyectos que 
        llevé a cabo durante mi proceso de formación académica, en las cuales adquirí 
        experiencia de nivel básico e intermedio.
      </p>
      
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Tecnologías</h2>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.historySection}>
          <h2 className={styles.sectionTitle}>Experiencia Laboral</h2>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.arqSection}>
        <h2 className={styles.sectionTitle}>Arquitecturas de Software</h2>
        <div className={styles.arqList}>
          <div className={styles.arqItem}>
            <h3>MVC</h3>
            <p className={styles.arqDescription}>Modelo-Vista-Controlador</p>
            <span className={styles.level}>Intermedio</span>
          </div>
          <div className={styles.arqItem}>
            <h3>MVVM</h3>
            <p className={styles.arqDescription}>Modelo-Vista-VistaModelo</p>
            <span className={styles.level}>Intermedio</span>
          </div>
          <div className={styles.arqItem}>
            <h3>Microservicios</h3>
            <p className={styles.arqDescription}>Arquitectura distribuida</p>
            <span className={styles.level}>Básico</span>
          </div>
        </div>
      </div>
    </section>
  )
};