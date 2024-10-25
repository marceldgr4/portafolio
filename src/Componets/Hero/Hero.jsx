import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./hero.module.css"

export const Hero =() => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido.</h1>
        <h3 className={styles.title2}>Soy Marcel Diaz Granados Robayo</h3>
        <p className={styles.description}>
          Soy ingeniero de sistemas con enfoque en el desarrollo de aplicaciones móviles iOS. 
          Tengo experiencia en el diseño y desarrollo. Me gusta trabajar en proyectos que me permitan 
          crecer profesionalmente y seguir aprendiendo cosas nuevas para mi vida profesional.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:marceldgr@gmail.com" className={styles.contactBtn}>
            <img className={styles.img} src={getImageUrl("hero/correo.png")} alt="contact" /> Contáctame
          </a>
          <a href="/cv/Marceldgr.pdf" className={styles.cvBtn} download="Marceldgr.pdf">
            <img className={styles.img} src={getImageUrl("hero/down.png")} alt="down" /> Currículo CV
          </a>
        </div>
      </div>
      <img src={getImageUrl("hero/about3.png")} alt="foto de perfil" className={styles.fotoPerfil}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
