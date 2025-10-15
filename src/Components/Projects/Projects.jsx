import React from 'react';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import Styles from "./Projects.module.css";

export const Projects = () => {
  return (
   <section className={Styles.Container} id= "Projects">
    <h1 className={Styles.title}>Proyectos</h1>
    <div className={Styles.Projects}>
        {projects.map((project, id) => {
                return <ProjectCard key={id} project={project}/>;                
            })}
    </div> 
   </section>
  );
}
