import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import { useLang } from '../../context/LanguageContext';
import styles from './Contact.module.css';

const EMAIL = 'marceldgr@gmail.com';
const COPIED_RESET_MS = 2000;

const CONTACT_LINKS = [
  {
    id: 'email',
    icon: 'contact/emailIcon.png',
    alt: 'email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: 'blue',
  },
  {
    id: 'linkedin',
    icon: 'contact/linkedinIcon.png',
    alt: 'linkedin',
    value: 'Marcel Díaz Granados',
    href: 'https://www.linkedin.com/in/marceldiazgranadosrobayo',
    color: 'linkedin',
  },
  {
    id: 'github',
    icon: 'contact/githubIcon.png',
    alt: 'github',
    value: 'marceldgr4',
    href: 'https://github.com/marceldgr4',
    color: 'purple',
  },
];

export const Contact = () => {
  const { t } = useLang();
  const copy = t.contact;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async (event) => {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(EMAIL);

      setCopiedEmail(true);

      setTimeout(() => {
        setCopiedEmail(false);
      }, COPIED_RESET_MS);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
      <footer id="Contact" className={styles.container}>
        <div className={styles.backgroundElements}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gradientOrb3} />
        </div>

        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.headerDecoration}>
              <div className={styles.decorationLine} />
              <div className={styles.decorationDot} />
              <div className={styles.decorationLine} />
            </div>

            <h2 className={styles.title}>
              {copy.title}
            </h2>

            <p className={styles.subtitle}>
              {copy.subtitle}
              <br />
              <span className={styles.highlightText}>
                {copy.cta}
              </span>
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {copy.stats.responseValue}
                </span>

                <span className={styles.statLabel}>
                  {copy.stats.responseTime}
                </span>
              </div>

              <div className={styles.statDivider} />

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {copy.stats.commitValue}
                </span>

                <span className={styles.statLabel}>
                  {copy.stats.commitment}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3 className={styles.linksTitle}>
              {copy.linksTitle}
            </h3>

            <ul className={styles.links}>
              {CONTACT_LINKS.map((link, index) => {
                const { label, description } = copy.links[index];
                const isEmail = link.id === 'email';

                return (
                    <li key={link.id}
                        className={`${styles.linkItem} ${styles[`linkItem${link.color}`]}`}
                    >
                      <div className={styles.iconWrapper}>
                        <div className={`${styles.iconBackground} ${styles[`iconBackground${link.color}`]}`}  />

                        <img src={getImageUrl(link.icon)}
                            alt={link.alt}
                            className={styles.icon}
                        />
                      </div>

                      <div className={styles.linkContent}>
                        <span className={styles.linkLabel}>
                          {label}
                        </span>

                        <a href={link.href}
                            className={styles.linkValue}
                            target={isEmail ? undefined : '_blank'}
                            rel={
                              isEmail
                                  ? undefined
                                  : 'noopener noreferrer'
                            }
                            onClick={
                              isEmail
                                  ? handleCopyEmail
                                  : undefined
                            }
                        >
                          {link.value}

                          {isEmail && copiedEmail && (
                              <span
                                  className={
                                    styles.copiedNotification
                                  }
                              >
                                                    {copy.copied}
                                                </span>
                          )}
                        </a>

                        <p className={styles.linkDescription}>
                          {description}
                        </p>
                      </div>

                      <div className={styles.linkArrow}>
                        <span>→</span>
                      </div>
                    </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.divider} />

          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Marcel Díaz Granados.{' '}
              {copy.copyright}
            </p>
          </div>
        </div>
      </footer>
  );
};