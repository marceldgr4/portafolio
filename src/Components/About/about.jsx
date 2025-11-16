import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./about.module.css";

export const About=()=> {
  return (
    <section className={styles.container} id="About">
        <h2 className={styles.title}>Acerca de mi.</h2>
        <div className={styles.content}>
          {/*ruta para cambiar lao fotos */}
          {/*  <img src={getImageUrl("hero/persona3d5.png")} alt="foto" className={styles.aboutImage}/>
        */}
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("about/person.png")} alt="personal" className={styles.iconos} />
              <div className={styles.aboutItemText}>
                <h3 className={styles.title2}>Nivel Personal.</h3>
                  <p className={styles.text}> 
                    Me consideró una persona curiosa, compremetida, sociable con buena disposición para trabajar en equipo. Disfruto escuchar, proponer ideas y generar 
                    un ambiente positivo, sin perder el enfoque en la calidad y el cumplimiento.</p>
              </div>
            </li>

            <li className={styles.aboutItem}>
                 {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("about/diploma.png")} alt="profesional"className={styles.iconos} />
                <div className={styles.aboutItemText}>
                  <h3>Nivel Profesional.</h3>
                  <p>Disfruto trabajar en el desarrollo web y móvil, especialmente en la construcción de 
                    experiencias intuitivas y funcionales. Tengo experiencia en tecnologías como React,
                     SwiftUI, Spring Boot me motiva poder combinar el diseño, la lógica 
                    y la arquitectura para entregar productos bien construidos y con una visión clara.</p>
                </div>
            </li>

           
          </ul>
        </div>
    </section>
   
  );
};
