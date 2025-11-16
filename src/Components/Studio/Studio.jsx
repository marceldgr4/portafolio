import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Studio.module.css";

export const Studio=()=> {
  return (
    <section className={styles.container} id="Studio">
        <h2 className={styles.title}>Estudios.</h2>
        <div className={styles.content}>
          {/*ruta para cambiar lao fotoos */}
           {/* <img src={getImageUrl("hero/persona3d7.png")} alt="foto" className={styles.StudioImage}/> */}
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("studio/univer.png")} alt="universidad" className={styles.iconos}/>
              <div className={styles.aboutItemText}>
                <h2 className={styles.title2}>UNIVESIDAD.</h2>
                
                  <p className={styles.text}> 
                     Universidad del Magdalena
                  </p>
                  <p className={styles.text}> 
                    Ingenieria de Sistemas.</p>
              </div>
            </li>

            <li className={styles.aboutItem}>
                 {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("studio/BD.png")} alt="DB" className={styles.iconos}/>
                <div className={styles.aboutItemText}>
                  <h2>TECNICO Servicio Nacional de Aprendisaje -SENA-.</h2>
                  <p> - Construcción de Base de datos con MySQL. </p>
                  <p> - Base de datos generalidades y sistema de gestión.</p> 
                </div>
            </li>
            {/*
            <li className={styles.aboutItem}>
                cambiar iconos al gusto de la personal  
              <img src={getImageUrl("about/infor.png")} alt="curso ico" />
              <div className={styles.aboutItemText}>
                <h3>TITULE.</h3>
                <p>nuevos estudio</p>
              </div>
            </li>*/}

          </ul>
        </div>
    </section>
   
  );
};
