import React, { useState, useEffect } from 'react';
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import Styles from "./Projects.module.css";

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    // Animación de entrada escalonada
    let isMounted = true;
    
    setVisibleProjects([]);
    projects.forEach((project, index) => {
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          setVisibleProjects(prev => [...prev, project]);
        }
      }, index * 100);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Obtener todas las tecnologías únicas
  const allSkills = [...new Set(projects.flatMap(p => p.skills))];

  // Filtrar proyectos
  const filteredProjects = filter === 'all' 
    ? visibleProjects 
    : visibleProjects.filter(p => p.skills.includes(filter));

  return (
    <section className={Styles.container} id="Projects">
      {/* Header con animación */}
      <div className={Styles.header}>
        <div className={Styles.headerContent}>
          <h1 className={Styles.title}>Proyectos</h1>
          <p className={Styles.subtitle}>
            Explora mi colección de proyectos y trabajos destacados
          </p>
        </div>
        
        {/* Decoración */}
        <div className={Styles.headerDecoration}>
          <div className={Styles.decorationLine}></div>
          <div className={Styles.decorationDot}></div>
          <div className={Styles.decorationLine}></div>
        </div>
      </div>

      {/* Filtros opcionales - descomenta si quieres usarlos */}
      {/* <div className={Styles.filters}>
        <button 
          className={`${Styles.filterButton} ${filter === 'all' ? Styles.filterActive : ''}`}
          onClick={() => setFilter('all')}
        >
          Todos
        </button>
        {allSkills.slice(0, 5).map((skill, index) => (
          <button 
            key={index}
            className={`${Styles.filterButton} ${filter === skill ? Styles.filterActive : ''}`}
            onClick={() => setFilter(skill)}
          >
            {skill}
          </button>
        ))}
      </div> */}

      {/* Grid de proyectos */}
      <div className={Styles.projects}>
        {filteredProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {/* Contador de proyectos */}
      <div className={Styles.projectCount}>
        <span className={Styles.countNumber}>{filteredProjects.length}</span>
        <span className={Styles.countLabel}>
          {filteredProjects.length === 1 ? 'Proyecto' : 'Proyectos'}
        </span>
      </div>
    </section>
  );
};