import React from 'react'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";
export const Experience = () => {
  return (
    <section className={styles.container} id="Experience">
    <h1 className={styles.title}>Experiencia y habilidades.</h1>
    <h2 className={styles.txt}>Estas son algunas herramientas que implementé para el desarrollo de proyectos que 
      llevé a cabo durante mi proceso de formación académica, en las cuales adquirí experiencia de forma  basica e intermedio. </h2>
    <div className={styles.content}>
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
    <div className={styles.Arq}>
      <h2>Arquictecturas.</h2>
      <ul>
        <li>
          <h3>MVC</h3><p>Baisco</p></li>
        <li><h3>MVVM</h3><p>Intermedio</p></li>
        <li><h3>VIPER</h3><p>Basico</p></li>
      </ul>

    </div>
  </section>
    
  )
};
