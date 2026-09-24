import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./hero.module.css"
import history from "../../data/history.json"
import skills from "../../data/skills.json"
import { useLang } from '../../context/LanguageContext'

const companiesCount = new Set(
    history.map(({ organisation }) => organisation.trim().toLowerCase())
).size

export const Hero = () => {
  const { t } = useLang()

  const STATS = [
    { value: "2",                   label: t.hero.stats.experience   },
    { value: String(companiesCount), label: t.hero.stats.companies    },
    { value: `${skills.length}+`,   label: t.hero.stats.technologies },
  ]

  return (
    <section className={styles.container} id="hero-content">
      <div className={styles.content}>
        <span className={styles.greeting}>{t.hero.greeting}</span>
        <h1 className={styles.name}>{t.hero.name}</h1>
        <h2 className={styles.role}>{t.hero.role}</h2>
        <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
        <p className={styles.description}>{t.hero.description}</p>

        <dl className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statValue}>{value}</dt>
              <dd className={styles.statLabel}>{label}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.actions}>
          <div className={styles.buttonContainer}>
            <a href="mailto:marceldgr@gmail.com" className={styles.contactBtn}>
              <img className={styles.img} src={getImageUrl("hero/correo.png")} alt="" aria-hidden="true" />
              {t.hero.contactBtn}
            </a>
            <a href="/CV/CV_Marceldgr_ATS.pdf" className={styles.cvBtn} download="Marceldgr.pdf">
              <img className={styles.img} src={getImageUrl("hero/down.png")} alt="" aria-hidden="true" />
              {t.hero.cvBtn}
            </a>
          </div>
        </div>
      </div>

      <img
        src={getImageUrl("hero/persona3d8.png")}
        alt="Foto de perfil de Marcel Diaz Granados"
        className={styles.fotoPerfil}
      />
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  )
}

export default Hero