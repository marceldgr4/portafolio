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
      title: "Actulización de los datos",
      description: "Permite la modificaión de los datos del productos por si se presenta erro, permite agregar mas unidades.",
    },
    {
      image: "proyect/inven5.png",
      title: "Retirar productos",
      description: "Permite el retiro de las unidades disponibles en el stock.",
    },
  ];

  const [mainImage, setMainImage] = useState(projectData[0].image);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Proyecto de Inventario</h2>

      <div className={styles.mainContent}>
        <div className={styles.imageShowcase}>
          <img
            src={getImageUrl(mainImage)}
            alt="Vista principal del proyecto de inventario"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.textBlock}>
          <p className={styles.description}>
            Sistema diseñado para optimizar la gestión de stock, seguimiento de productos y generación de reportes.
            Su arquitectura está pensada para ser fluida, precisa y visualmente elegante, priorizando la experiencia del usuario.
          </p>

          <h3 className={styles.techTitle}>Tecnologías Utilizadas</h3>
          <ul className={styles.techList}>
            <li>Apps scrip</li>
            <li>Sheet Google</li>
            
          </ul>

          <a
            href="https://script.google.com/macros/s/AKfycbwcFUDTjWS-BOMpDriyLS6ZpOLZS0y8AAaQZphEhV3_ZLHx51JsqFLviwh2SgMggNuR/exec"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.exploreButton}
          >
            Explorar Proyecto
          </a>

          <p className={styles.credentials}>
            <strong>Usuario:</strong> Admin &nbsp; | &nbsp;
            <strong>Contraseña:</strong> 1admin4
          </p>
        </div>
      </div>

      <div className={styles.gallerySection}>
        {projectData.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => setMainImage(item.image)}
          >
            <img
              src={getImageUrl(item.image)}
              alt={item.title}
              className={styles.cardImage}
            />
            <div className={styles.cardBody}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
