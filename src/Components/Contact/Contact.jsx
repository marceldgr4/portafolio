import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactLinks = [
    {
      id: 1,
      icon: "contact/emailIcon.png",
      alt: "email",
      label: "Email",
      value: "marceldgr@gmail.com",
      href: "mailto:marceldgr@gmail.com",
      color: "blue",
      description: "Escríbeme un correo"
    },
    {
      id: 2,
      icon: "contact/linkedinIcon.png",
      alt: "linkedin",
      label: "LinkedIn",
      value: "Marcel Díaz Granados",
      href: "http://www.linkedin.com/in/marceldiazgranadosrobayo",
      color: "linkedin",
      description: "Conectemos profesionalmente"
    },
    {
      id: 3,
      icon: "contact/githubIcon.png",
      alt: "github",
      label: "GitHub",
      value: "marceldgr4",
      href: "https://github.com/marceldgr4",
      color: "purple",
      description: "Revisa mis proyectos"
    }
  ];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("marceldgr@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer id="Contact" className={styles.container}>
      {/* Elementos decorativos de fondo */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.content}>
        {/* Sección de texto principal */}
        <div className={styles.textSection}>
          <div className={styles.headerDecoration}>
            <div className={styles.decorationLine}></div>
            <div className={styles.decorationDot}></div>
            <div className={styles.decorationLine}></div>
          </div>

          <h2 className={styles.title}>¿Hablamos?</h2>
          <p className={styles.subtitle}>
            Estoy disponible para nuevos proyectos y oportunidades.
            <br />
            <span className={styles.highlightText}>¡No dudes en comunicarte!</span>
          </p>

          {/* Estadísticas opcionales */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Tiempo de respuesta</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Compromiso</span>
            </div>
          </div>
        </div>

        {/* Sección de links */}
        <div className={styles.linksSection}>
          <h3 className={styles.linksTitle}>Canales de contacto</h3>
          <ul className={styles.links}>
            {contactLinks.map((link, index) => (
              <li
                key={link.id}
                className={`${styles.linkItem} ${styles[`linkItem${link.color}`]} ${
                  hoveredLink === index ? styles.linkItemHovered : ''
                }`}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Icono */}
                <div className={styles.iconWrapper}>
                  <div className={`${styles.iconBackground} ${styles[`iconBackground${link.color}`]}`}></div>
                  <img
                    src={getImageUrl(link.icon)}
                    alt={link.alt}
                    className={styles.icon}
                  />
                </div>

                {/* Contenido del link */}
                <div className={styles.linkContent}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <a
                    href={link.href}
                    className={styles.linkValue}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={link.id === 1 ? handleCopyEmail : undefined}
                  >
                    {link.value}
                    {link.id === 1 && copiedEmail && (
                      <span className={styles.copiedNotification}>✓ Copiado</span>
                    )}
                  </a>
                  <p className={styles.linkDescription}>{link.description}</p>
                </div>

                {/* Flecha indicadora */}
                <div className={styles.linkArrow}>
                  <span>→</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.divider}></div>
        <div className={styles.bottomContent}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Marcel Díaz Granados. Todos los derechos reservados.
          </p>
          <p className={styles.tagline}>
            Construido con <span className={styles.heart}>♥</span> y React
          </p>
        </div>
      </div>
    </footer>
  );
};