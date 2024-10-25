import React, {useState} from 'react'; 

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portafolio</a>
      <div className={styles.menu}>

        <img className={styles.menuBtn} src={menuOpen 
        ?getImageUrl("nav/closeIcon.png")
        : getImageUrl("nav/menuIcon.png")  
        } 
        alt="menu-button"
        onClick={()=> setMenuOpen(!menuOpen)}
        />
        


        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}
        >
          <li><a href="#Home">Inicio.</a></li>
          <li><a href="#About">Acerca de Mi.</a></li>
          <li><a href="#Studio">Estudios.</a></li>
          <li><a href="#Experience">Experencia & Habilidades.</a></li>
          <li><a href="#Projects">Proyectos.</a></li>
          <li><a href="#Contact">Contacto.</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
