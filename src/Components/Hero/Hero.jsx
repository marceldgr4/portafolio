import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./hero.module.css"

export const Hero =() => {
  return (
    <section className={styles.container}id="Hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido.</h1>
        <h2 className={styles.title2}>¡Hola! Soy.</h2>
        <h3 className={styles.title2}>Marcel Diaz Granados</h3>
        <h2 className={styles.title3}>Ingeniero de Sistemas </h2>
        <p className={styles.description}>
         Apasionado por crear soluciones tecnológicas que realmente marquen una diferencia. 
          
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:marceldgr@gmail.com" className={styles.contactBtn}>
            <img className={styles.img} src={getImageUrl("hero/correo.png")} alt="contact" /> Contáctame
          </a>
          <a href="/CV/CV_Marceldgr.pdf" className={styles.cvBtn} download="Marceldgr.pdf">
            <img className={styles.img} src={getImageUrl("hero/down.png")} alt="down" /> Currículo CV
          </a>
          
        </div>
      </div>
      <img src={getImageUrl("hero/persona3d8.png")} alt="foto de perfil" className={styles.fotoPerfil}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
