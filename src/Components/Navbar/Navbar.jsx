import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';

    // Detectar scroll para cambiar estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú al cambiar de ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

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
            // Si estamos en otra página, navegar a home primero
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
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContent}>
                {isHomePage ? (
                    <ScrollLink 
                        className={styles.title} 
                        to="home" 
                        smooth={true} 
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                    >
                        <img src={getImageUrl("nav/logo2.png")} alt="Logo" className={styles.logo}/>
                        <span>Portafolio</span>
                    </ScrollLink>
                ) : (
                    <Link to="/" className={styles.title} onClick={() => setMenuOpen(false)}>
                        <img src={getImageUrl("nav/logo2.png")} alt="Logo" className={styles.logo}/>
                        <span>Portafolio</span>
                    </Link>
                )}

                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                        alt="menú" 
                        onClick={handleMenuToggle} 
                    />

                    <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                        <li onClick={() => handleNavigation('home')}>
                            <span>Inicio</span>
                        </li>
                        <li onClick={() => handleNavigation('about')}>
                            <span>Acerca de Mí</span>
                        </li>
                        <li onClick={() => handleNavigation('studio')}>
                            <span>Estudios</span>
                        </li>
                        <li onClick={() => handleNavigation('experience')}>
                            <span>Experiencia</span>
                        </li>
                        <li onClick={() => handleNavigation('projects')}>
                            <span>Proyectos</span>
                        </li>
                        <li onClick={() => handleNavigation('contact')}>
                            <span>Contacto</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};