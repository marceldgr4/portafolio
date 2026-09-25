import React from 'react';
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from "./transp.module.css";

export const Transport = () => {
    const { t } = useLang();
    const copy = t.transport;

    return (
        <section className={styles.container} id="Trans">
            <h1 className={styles.title}>{copy.title}</h1>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img src={getImageUrl("Iphone/iphone3.png")} alt="" className={styles.img} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={getImageUrl("Iphone/iphone5.png")} alt="" className={styles.img} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>{copy.subtitle}</h2>
                    <p className={styles.text}>{copy.description}</p>
                </div>
            </div>
        </section>
    );
};