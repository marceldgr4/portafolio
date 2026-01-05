import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    const handleNavigation = (section) => {
        setMenuOpen(false);
        
        if (isHomePage) {
            // Si estamos en home, scroll directo
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
                offset: -70
            });
        } else {
            // Si estamos en otra página, navegar a home y luego scroll
            navigate('/');
            setTimeout(() => {
                scroller.scrollTo(section, {
                    smooth: true,
                    duration: 500,
                    offset: -70
                });
            }, 100);
        }
    };

    return (
        <nav className={styles.navbar}>
            {isHomePage ? (
                <ScrollLink 
                    className={styles.title} 
                    to="home" 
                    smooth={true} 
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                >
                    <img src={getImageUrl("nav/logo2.png")} alt="Logo" className={styles.logo}/>
                    Portafolio
                </ScrollLink>
            ) : (
                <Link to="/" className={styles.title} onClick={() => setMenuOpen(false)}>
                    <img src={getImageUrl("nav/logo2.png")} alt="Logo" className={styles.logo}/>
                    Portafolio
                </Link>
            )}

            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button" 
                    onClick={handleMenuToggle} 
                />

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li onClick={() => handleNavigation('home')}>Inicio</li>
                    <li onClick={() => handleNavigation('about')}>Acerca de Mí</li>
                    <li onClick={() => handleNavigation('studio')}>Estudios</li>
                    <li onClick={() => handleNavigation('experience')}>Experiencia</li>
                    <li onClick={() => handleNavigation('projects')}>Proyectos</li>
                    <li onClick={() => handleNavigation('contact')}>Contacto</li>
                </ul>
            </div>
        </nav>
    );
};