import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Cases.module.css";

const Section = ({ label, tone, items }) => (
    <div>
        <h4 className={`${styles.sectionLabel} ${styles[tone]}`}>{label}</h4>
        <ul className={`${styles.list} ${styles[`${tone}List`]}`}>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
);

export const CaseCard = ({
    caseStudy: { company, isCurrent, sector, logo, title, challenge, architecture, results, stack, link },
    labels = {},
}) => (
    <article className={styles.card}>
        <header className={styles.cardHeader}>
            <img src={getImageUrl(logo)} alt={`${company} Logo`} className={styles.logo} loading="lazy" />
            <div>
                <div className={styles.companyRow}>
                    <h3 className={styles.company}>{company}</h3>
                    {isCurrent && <span className={styles.badge}>{labels.current || "Actual"}</span>}
                </div>
                <p className={styles.sector}>{sector}</p>
            </div>
        </header>

        <h3 className={styles.title}>{title}</h3>

        <div>
            <h4 className={`${styles.sectionLabel} ${styles.challenge}`}>
                {labels.challenge || "El reto"}
            </h4>
            <p className={styles.challengeText}>{challenge}</p>
        </div>

        <div className={styles.columns}>
            <Section label={labels.architecture || "Arquitectura"} tone="architecture" items={architecture} />
            <Section label={labels.results || "Resultado"} tone="results" items={results} />
        </div>

        <footer className={styles.cardFooter}>
            <ul className={styles.stack}>
                {stack.map((tech) => (
                    <li key={tech} className={styles.chip}>
                        {tech}
                    </li>
                ))}
            </ul>
            {link && (
                <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {link.label} ↗
                </a>
            )}
        </footer>
    </article>
);