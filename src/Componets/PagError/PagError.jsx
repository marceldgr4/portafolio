import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from "./Perdida.module.css";

export const PagError = () => {
    const navigate = useNavigate();

    const handleGoToProjects = () => {
        navigate("/#projects"); // Redirige a la sección de Proyectos
    };

    return (
        <div>
            <section className={styles.container} id="PagError">
                <div className={styles.content}>
                    {/* Imagen al lado izquierdo */}
                    <div className={styles.imgContainer}>
                        <img src={getImageUrl("about/about5.png")} alt="img" className={styles.img} />
                    </div>

                    {/* Texto y botón al lado derecho */}
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>404</h1>
                        <h2>Página no encontrada</h2>
                        <button onClick={handleGoToProjects} className={styles.button}>
                            Volver a Proyectos
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
