import React, { useState, useEffect } from 'react';
import projectsData from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { useLang } from "../../context/LanguageContext";
import Styles from "./Projects.module.css";

export const Projects = () => {
  const { t } = useLang();
  const projectsList = t.projects?.items || projectsData;
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    setVisibleProjects(projectsList);
  }, [projectsList]);

  const labels = {
    viewProject: t.projects?.viewProject || 'Ver Proyecto',
    demo:        t.projects?.demo        || 'Demo',
    source:      t.projects?.source      || 'Código',
  };

  return (
    <section className={Styles.container} id="projects-content" aria-labelledby="projects-title">
      {/* Header */}
      <div className={Styles.header}>
        <div className={Styles.headerContent}>
          <h2 id="projects-title" className={Styles.title}>
            {t.projects?.title || 'Proyectos'}
          </h2>
          <p className={Styles.subtitle}>
            {t.projects?.subtitle || 'Explora mi colección de proyectos y trabajos destacados'}
          </p>
        </div>
        
        {/* Decoración */}
        <div className={Styles.headerDecoration} aria-hidden="true">
          <div className={Styles.decorationLine} />
          <div className={Styles.decorationDot} />
          <div className={Styles.decorationLine} />
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className={Styles.projects}>
        {visibleProjects.map((project, id) => (
          <ProjectCard key={project.id || id} project={project} labels={labels} />
        ))}
      </div>

      {/* Contador de proyectos */}
      <div className={Styles.projectCount}>
        <span className={Styles.countNumber}>{visibleProjects.length}</span>
        <span className={Styles.countLabel}>
          {visibleProjects.length === 1
            ? (t.projects?.project || 'Proyecto')
            : (t.projects?.projects || 'Proyectos')}
        </span>
      </div>
    </section>
  );
};