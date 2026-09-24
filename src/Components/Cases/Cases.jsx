import React from "react";
import casesData from "../../data/cases.json";
import { CaseCard } from "./CaseCard";
import { useLang } from "../../context/LanguageContext";
import styles from "./Cases.module.css";

export const Cases = () => {
    const { t } = useLang();
    const casesList = t.cases?.items || casesData;

    return (
        <section className={styles.container} id="cases-content" aria-labelledby="cases-title">
            <header className={styles.header}>
                <div className={styles.headerDecoration} aria-hidden="true">
                    <div className={styles.decorationLine} />
                    <div className={styles.decorationDot} />
                    <div className={styles.decorationLine} />
                </div>
                <h2 id="cases-title" className={styles.heading}>
                    {t.cases?.title || 'Del problema al resultado'}
                </h2>
                <p className={styles.subtitle}>
                    {t.cases?.subtitle || 'Cómo abordo proyectos reales: el reto que enfrenté, la arquitectura que diseñé y el impacto que dejó.'}
                </p>
                <p className={styles.notice}>
                    {t.cases?.notice || 'Son productos privados bajo acuerdos de confidencialidad. Puedo aportar referencias verificables de cada empresa a solicitud.'}
                </p>
            </header>

            <div className={styles.cases}>
                {casesList.map((caseStudy) => (
                    <CaseCard key={caseStudy.id} caseStudy={caseStudy} labels={t.cases?.labels} />
                ))}
            </div>

            <div className={styles.backgroundElements} aria-hidden="true">
                <div className={styles.floatingCircle1} />
                <div className={styles.floatingCircle2} />
                <div className={styles.floatingCircle3} />
            </div>
        </section>
    );
};