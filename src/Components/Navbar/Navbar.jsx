import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useLang } from '../../context/LanguageContext';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useLang();

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
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
                offset: -70
            });
        } else {
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

    const navItems = [
        { key: 'home',       label: t.nav.home       },
        { key: 'about',      label: t.nav.about      },
        { key: 'studio',     label: t.nav.studio     },
        { key: 'skills',     label: t.nav.skills     },
        { key: 'experience', label: t.nav.experience },
        { key: 'cases',      label: t.nav.cases      },
        { key: 'projects',   label: t.nav.projects   },
        { key: 'contact',    label: t.nav.contact    },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Navegación principal">
            <div className={styles.navContent}>
                {isHomePage ? (
                    <ScrollLink 
                        className={styles.title} 
                        to="home" 
                        smooth={true} 
                        duration={500}
                        onClick={() => setMenuOpen(false)}
                    >
                        <img src={getImageUrl("nav/logo2.png")} alt="Logo Marcel Diaz" className={styles.logo}/>
                        <span>{t.nav.brand}</span>
                    </ScrollLink>
                ) : (
                    <Link to="/" className={styles.title} onClick={() => setMenuOpen(false)}>
                        <img src={getImageUrl("nav/logo2.png")} alt="Logo Marcel Diaz" className={styles.logo}/>
                        <span>{t.nav.brand}</span>
                    </Link>
                )}

                <div className={styles.menu}>
                    {/* Hamburger — semántico y accesible */}
                    <button
                        className={styles.menuBtn}
                        onClick={handleMenuToggle}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    >
                        <img
                            src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                            alt=""
                            aria-hidden="true"
                        />
                    </button>

                    {/* Overlay para cerrar al hacer click fuera */}
                    {menuOpen && (
                        <div
                            className={styles.overlay}
                            onClick={() => setMenuOpen(false)}
                            aria-hidden="true"
                        />
                    )}

                    <ul
                        id="mobile-menu"
                        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                        role="list"
                    >
                        {navItems.map(({ key, label }) => (
                            <li key={key} onClick={() => handleNavigation(key)}>
                                <span>{label}</span>
                            </li>
                        ))}

                        {/* Selector de idioma en mobile */}
                        <li className={styles.langMobile} role="none">
                            <LanguageSwitcher mobile />
                        </li>
                    </ul>

                    {/* Selector de idioma en desktop */}
                    <div className={styles.langDesktop}>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
};