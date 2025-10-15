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

    // Cierra el menú al hacer clic en cualquier enlace
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    return (
        <nav className={styles.navbar}>
               
            {/* Título del sitio */}
            {isHomePage ? (
                <ScrollLink className={styles.title} to="home" smooth={true} duration={500}>
                 <img src={getImageUrl("nav/logo2.png")} alt="Logo" className={styles.logo}/>
       
                    Portafolio
                </ScrollLink>
            ) : (
                <Link to="/" className={styles.title}>Portafolio</Link>
            )}

            {/* Menú móvil */}
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button" 
                    onClick={handleMenuToggle} 
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={handleMenuToggle}>
                    {isHomePage ? (
                        // Enlaces de desplazamiento interno en la página principal
                        <>
                            <li><ScrollLink to="home" smooth={true} duration={500}>Inicio</ScrollLink></li>
                            <li><ScrollLink to="about" smooth={true} duration={500}>Acerca de Mi</ScrollLink></li>
                            <li><ScrollLink to="studio" smooth={true} duration={500}>Estudios</ScrollLink></li>
                            <li><ScrollLink to="experience" smooth={true} duration={500}>Experiencia & Habilidades</ScrollLink></li>
                            <li><ScrollLink to="projects" smooth={true} duration={500}>Proyectos</ScrollLink></li>
                            <li><ScrollLink to="contact" smooth={true} duration={500}>Contacto</ScrollLink></li>
                        </>
                    ) : (
                        // Navegación con redirección a la página principal y desplazamiento
                        <>
                            <li><Link to="/#home" onClick={() => window.location.href = "/#home"}>Inicio</Link></li>
                            <li><Link to="/#about" onClick={() => window.location.href = "/#about"}>Acerca de Mi</Link></li>
                            <li><Link to="/#studio" onClick={() => window.location.href = "/#studio"}>Estudios</Link></li>
                            <li><Link to="/#experience" onClick={() => window.location.href = "/#experience"}>Experiencia & Habilidades</Link></li>
                            <li><Link to="/#projects" onClick={() => window.location.href = "/#projects"}>Proyectos</Link></li>
                            <li><Link to="/#contact" onClick={() => window.location.href = "/#contact"}>Contacto</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};
