import React from 'react';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';
import { Link } from 'react-router-dom';



export const ProjectCard = ( { project: { title, imageSrc, description, skills, demo, source},}) => {
  return (
    <div className={styles.Container}id="">
        <img src={getImageUrl(imageSrc)}
         alt={`Image of ${title}`} className={styles.image}/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill,id)=>{
                       return <li key={id} className={styles.skill} >{skill}</li>
                    })}
                </ul>
                <div className={styles.links}>
                    <Link to ={demo} className={styles.link}>Demo</Link>
                    <a href={source} className={styles.link} >Source</a>
         </div>
     </div>
  );
};
 