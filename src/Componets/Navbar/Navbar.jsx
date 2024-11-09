import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Determina si estás en la página principal o no
    const isHomePage = location.pathname === '/';

    return (
        <nav className={styles.navbar}>
            {isHomePage ? (
                <ScrollLink className={styles.title} to="home" smooth={true} duration={500}>
                    Portafolio
                </ScrollLink>
            ) : (
                <Link to="/" className={styles.title}>Portafolio</Link>
            )}

            <div className={styles.menu}>
                <img className={styles.menuBtn} 
                     src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                     alt="menu-button" 
                     onClick={() => setMenuOpen(!menuOpen)} 
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                    {isHomePage ? (
                        // Desplazamiento interno en la página principal
                        <>
                            <li><ScrollLink to="home" smooth={true} duration={500}>Inicio</ScrollLink></li>
                            <li><ScrollLink to="about" smooth={true} duration={500}>Acerca de Mi</ScrollLink></li>
                            <li><ScrollLink to="studio" smooth={true} duration={500}>Estudios</ScrollLink></li>
                            <li><ScrollLink to="experience" smooth={true} duration={500}>Experiencia & Habilidades</ScrollLink></li>
                            <li><ScrollLink to="projects" smooth={true} duration={500}>Proyectos</ScrollLink></li>
                            <li><ScrollLink to="contact" smooth={true} duration={500}>Contacto</ScrollLink></li>
                        </>
                    ) : (
                        // Navegación completa para regresar a la página principal y desplazarse a una sección
                        <>
                            <li><Link to="/#home">Inicio</Link></li>
                            <li><Link to="/#about">Acerca de Mi</Link></li>
                            <li><Link to="/#studio">Estudios</Link></li>
                            <li><Link to="/#experience">Experiencia & Habilidades</Link></li>
                            <li><Link to="/#projects">Proyectos</Link></li>
                            <li><Link to="/#contact">Contacto</Link></li>
                        </>
                    )}
                    
                </ul>
            </div>
        </nav>
    );
};
