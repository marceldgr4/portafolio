import React, { useCallback, useRef, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Coverflow.module.css';

const SWIPE_THRESHOLD_PX = 40;
const MAX_VISIBLE_DISTANCE = 3;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export const Coverflow = ({ slides, labels }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(null);
    const lastIndex = slides.length - 1;

    const goTo = useCallback(
        (index) => setActiveIndex(clamp(index, 0, lastIndex)),
        [lastIndex]
    );

    const handleKeyDown = (event) => {
        const actions = {
            ArrowLeft: () => goTo(activeIndex - 1),
            ArrowRight: () => goTo(activeIndex + 1),
            Home: () => goTo(0),
            End: () => goTo(lastIndex),
        };
        const action = actions[event.key];
        if (!action) return;
        event.preventDefault();
        action();
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
        goTo(activeIndex + (deltaX < 0 ? 1 : -1));
    };

    const current = slides[activeIndex];

    return (
        <div
            className={styles.coverflow}
            role="group"
            aria-roledescription="carousel"
            aria-label={labels.region}
            onKeyDown={handleKeyDown}
        >
            <div
                className={styles.stage}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => {
                    const offset = index - activeIndex;
                    const distance = Math.abs(offset);
                    const isActive = offset === 0;

                    return (
                        <button
                            key={slide.image}
                            type="button"
                            className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
                            style={{
                                '--offset': offset,
                                '--abs': distance,
                                '--dir': Math.sign(offset),
                                zIndex: slides.length - distance,
                            }}
                            data-distance={Math.min(distance, MAX_VISIBLE_DISTANCE)}
                            onClick={() => goTo(index)}
                            aria-label={`${index + 1} / ${slides.length}: ${slide.title}`}
                            aria-current={isActive ? 'true' : undefined}
                        >
                            <img
                                src={getImageUrl(slide.image)}
                                alt=""
                                className={styles.image}
                                loading={distance > 1 ? 'lazy' : 'eager'}
                                draggable={false}
                            />
                        </button>
                    );
                })}
            </div>

            <div className={styles.controls}>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => goTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    aria-label={labels.prev}
                >
                    &#8249;
                </button>
                <span className={styles.counter}>
          {labels.counter} {activeIndex + 1} / {slides.length}
        </span>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => goTo(activeIndex + 1)}
                    disabled={activeIndex === lastIndex}
                    aria-label={labels.next}
                >
                    &#8250;
                </button>
            </div>

            <div className={styles.caption} aria-live="polite">
                <h3 className={styles.captionTitle}>{current.title}</h3>
                <p className={styles.captionText}>{current.description}</p>
            </div>
        </div>
    );
};