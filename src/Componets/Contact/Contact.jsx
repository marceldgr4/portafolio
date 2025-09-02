import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
   <footer id="Contact" className={styles.container}>
    <div className={styles.txt}>
        <h1>Contacto.</h1>
        <p >¡No dudes en comunicarte!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
            <a href="mailto:marceldgr@gmail.com">marceldgr@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin" />
            <a href="http://www.linkedin.com/in/marceldiazgranadosrobayo">Linkedin</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github" />
            <a href="https://github.com/marceldgr4">GitHub.com</a>
        </li>
    </ul>
   </footer>
  )
}
