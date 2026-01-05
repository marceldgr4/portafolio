import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./InvenProject.module.css";

export const InvenProject = () => {
  const projectData = [
    {
      image: "proyect/inven0.png",
      title: "Pantalla de carga",
      description: "Transición inicial con animación fluida que da la bienvenida al usuario antes de acceder al sistema.",
    },
    {
      image: "proyect/inven1.png",
      title: "Dashboard principal",
      description: "Visualiza métricas y reportes clave con un diseño moderno que facilita la interpretación de datos.",
    },
    {
      image: "proyect/inven2.png",
      title: "Gestión de productos",
      description: "Administra productos, categorías y unidades con precisión y control total sobre el inventario.",
    },
    {
      image: "proyect/inven3.png",
      title: "Registro de ingresos",
      description: "Registra las entradas de productos con validación inteligente y actualización automática del stock.",
    },
    {
      image: "proyect/inven4.png",
      title: "Actualización de los datos",
      description: "Permite la modificación de los datos del producto por si se presenta error, permite agregar más unidades.",
    },
    {
      image: "proyect/inven5.png",
      title: "Retirar productos",
      description: "Permite el retiro de las unidades disponibles en el stock.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageChange = (index) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? projectData.length - 1 : currentIndex - 1;
    handleImageChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === projectData.length - 1 ? 0 : currentIndex + 1;
    handleImageChange(newIndex);
  };

  const currentItem = projectData[currentIndex];

  return (
    <section className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>Proyecto de Inventario</h2>
        <p className={styles.subtitle}>
          Sistema inteligente para gestión de inventarios con tecnología de última generación
        </p>
      </div>

      <div className={styles.mainContent}>
        {/* Showcase de imagen con controles */}
        <div className={styles.imageShowcase}>
          <div className={styles.imageWrapper}>
            <img
              src={getImageUrl(currentItem.image)}
              alt={currentItem.title}
              className={`${styles.heroImage} ${isAnimating ? styles.imageTransition : ''}`}
            />
            
            {/* Overlay con información */}
            <div className={styles.imageOverlay}>
              <h3 className={styles.overlayTitle}>{currentItem.title}</h3>
              <p className={styles.overlayDescription}>{currentItem.description}</p>
            </div>

            {/* Controles de navegación */}
            <button
              onClick={handlePrevious}
              className={`${styles.navButton} ${styles.navButtonLeft}`}
              aria-label="Anterior"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className={`${styles.navButton} ${styles.navButtonRight}`}
              aria-label="Siguiente"
            >
              &#8250;
            </button>
          </div>

          {/* Indicadores de progreso */}
          <div className={styles.progressIndicators}>
            {projectData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`${styles.indicator} ${
                  index === currentIndex ? styles.indicatorActive : ''
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Panel de información */}
        <div className={styles.textBlock}>
          {/* Descripción */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={styles.accentBar}></div>
              <h3>Sobre el Proyecto</h3>
            </div>
            <p className={styles.description}>
              Sistema diseñado para optimizar la gestión de stock, seguimiento de productos y generación de reportes.
              Su arquitectura está pensada para ser fluida, precisa y visualmente elegante, priorizando la experiencia del usuario.
            </p>
          </div>

          {/* Tecnologías */}
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <div className={`${styles.accentBar} ${styles.accentBarPurple}`}></div>
              <h3 className={styles.techTitle}>Tecnologías Utilizadas</h3>
            </div>
            <ul className={styles.techList}>
              <li>Apps Script</li>
              <li>Google Sheets</li>
            </ul>
          </div>

          {/* Credenciales y botón */}
          <div className={styles.accessCard}>
            <h4 className={styles.accessTitle}>Credenciales de Acceso</h4>
            <div className={styles.credentialsGrid}>
              <div className={styles.credentialBox}>
                <p className={styles.credentialLabel}>Usuario</p>
                <p className={styles.credentialValue}>Admin</p>
              </div>
              <div className={styles.credentialBox}>
                <p className={styles.credentialLabel}>Contraseña</p>
                <p className={styles.credentialValue}>1admin4</p>
              </div>
            </div>
            
            <a
              href="https://script.google.com/macros/s/AKfycbwcFUDTjWS-BOMpDriyLS6ZpOLZS0y8AAaQZphEhV3_ZLHx51JsqFLviwh2SgMggNuR/exec"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.exploreButton}
            >
              <span>Explorar Proyecto</span>
              <span className={styles.buttonIcon}>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Galería de miniaturas */}
      <div className={styles.gallerySection}>
        <h3 className={styles.galleryTitle}>Características Destacadas</h3>
        <div className={styles.galleryGrid}>
          {projectData.map((item, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`${styles.card} ${
                index === currentIndex ? styles.cardActive : ''
              }`}
            >
              <div className={styles.cardImageWrapper}>
                <img
                  src={getImageUrl(item.image)}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.cardBody}>
                    <h4>{item.title}</h4>
                  </div>
                </div>
                {index === currentIndex && (
                  <div className={styles.activeIndicator}>✓</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};