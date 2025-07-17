import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./about.module.css";

export const About=()=> {
  return (
    <section className={styles.container} id="About">
        <h2 className={styles.title}>Acerca de mi.</h2>
        <div className={styles.content}>
          {/*ruta para cambiar lao fotoos */}
            <img src={getImageUrl("about/about4.png")} alt="foto" className={styles.aboutImage}/>
        
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("about/person3d.png")} alt="personal" className={styles.iconos} />
              <div className={styles.aboutItemText}>
                <h3 className={styles.title2}>Nivel Personal.</h3>
                  <p className={styles.text}> 
                    Me consideró algo relajado, divertido con mi grupo de amigos y familia
                    cuando la ocasión lo permite. también me considero sociable, aunque en 
                    algunas ocaciones doy la impresión de estar molesto por el tono de mi voz,
                    pero es algo que me esfuezo por mejorar constantemente.</p>
              </div>
            </li>

            <li className={styles.aboutItem}>
                 {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("about/diploma.png")} alt="profesional"className={styles.iconos} />
                <div className={styles.aboutItemText}>
                  <h3>Nivel Profesional.</h3>
                  <p>Considero que soy dedicada y comprometido con mis responsabilidades 
                    lo que ayuda mejor constantemente como en lo profesional y académico 
                    siempre buscando dar lo mejor de mi</p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                {/*cambiar iconos al gusto de la personal  */}
              <img src={getImageUrl("about/infor.png")} alt="info" className={styles.iconos} />
              <div className={styles.aboutItemText}>
                <h3>Intereses.</h3>
                <p>Una de la cosa que me gusta es la tecnologías y procuro esta lo mejor informado
                  ya sea en nuevos desarrollo de hermanitas, robótica, entrenamiento, mecánica
                  automotriz para tener una punto critico.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
   
  );
};
