'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={`container ${styles.container}`}>
        <p className={styles.text}>
          OnPoint Koeriers gebruikt functionele en analytische cookies om de website-ervaring te optimaliseren.
        </p>
        <div className={styles.actions}>
          <Link href="/privacybeleid" className={styles.link}>
            Privacybeleid
          </Link>
          <button onClick={handleAccept} className={styles.button}>
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
