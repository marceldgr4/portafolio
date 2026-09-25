import React from 'react';
import { useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Coverflow } from './Coverflow';
import { useLang } from '../../context/LanguageContext';
import styles from './InvenProject.module.css';

const DEMO_URL =
    'https://script.google.com/macros/s/AKfycbwcFUDTjWS-BOMpDriyLS6ZpOLZS0y8AAaQZphEhV3_ZLHx51JsqFLviwh2SgMggNuR/exec';

const DEMO_CREDENTIALS = {
  user: 'Admin',
  password: '1admin4',
};

export const InvenProject = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const copy = t.invenProject;

  const handleBack = () => {
    navigate('/');

    setTimeout(() => {
      scroller.scrollTo('projects', {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }, 100);
  };

  const coverflowLabels = {
    region: copy.coverflowTitle,
    prev: copy.prevBtn,
    next: copy.nextBtn,
    counter: copy.viewThumbnails,
  };

  return (
      <section className={styles.container}>
        <div className={styles.inner}>
          <button
              type="button"
              className={styles.backLink}
              onClick={handleBack}
          >
            {copy.back}
          </button>

          <header className={styles.header}>
                    <span className={styles.badge}>
                        {copy.coverflowBadge}
                    </span>

            <h1 className={styles.title}>
              {copy.title}
            </h1>

            <p className={styles.subtitle}>
              {copy.subtitle}
            </p>
          </header>

          <div className={styles.coverflowSection}>
            <h2 className={styles.sectionTitle}>
              {copy.coverflowTitle}
            </h2>

            <p className={styles.sectionSubtitle}>
              {copy.coverflowSubtitle}
            </p>

            <Coverflow
                slides={copy.screens}
                labels={coverflowLabels}
            />

            <p className={styles.hint}>
              {copy.keyboardHint}
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.accentBar} />

                <h3>
                  {copy.aboutTitle}
                </h3>
              </div>

              <p className={styles.description}>
                {copy.aboutDescription}
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div
                    className={`${styles.accentBar} ${styles.accentBarPurple}`}
                />

                <h3 className={styles.techTitle}>
                  {copy.techTitle}
                </h3>
              </div>

              <ul className={styles.techList}>
                {copy.techList.map((tech) => (
                    <li key={tech}>
                      {tech}
                    </li>
                ))}
              </ul>
            </div>

            <div className={styles.accessCard}>
              <h4 className={styles.accessTitle}>
                {copy.accessTitle}
              </h4>

              <div className={styles.credentialsGrid}>
                <div className={styles.credentialBox}>
                  <p className={styles.credentialLabel}>
                    {copy.userLabel}
                  </p>

                  <p className={styles.credentialValue}>
                    {DEMO_CREDENTIALS.user}
                  </p>
                </div>

                <div className={styles.credentialBox}>
                  <p className={styles.credentialLabel}>
                    {copy.passLabel}
                  </p>

                  <p className={styles.credentialValue}>
                    {DEMO_CREDENTIALS.password}
                  </p>
                </div>
              </div>

              <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.exploreButton}
              >
                            <span>
                                {copy.exploreBtn}
                            </span>

                <span className={styles.buttonIcon}>
                                →
                            </span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};