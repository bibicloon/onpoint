"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          OnPoint.
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/spoedtransport" className={styles.navLink}>Spoedtransport</Link></li>
            <li><Link href="/diensten" className={styles.navLink}>Diensten</Link></li>
            <li><Link href="/tarieven" className={styles.navLink}>Tarieven</Link></li>
            <li><Link href="/faq" className={styles.navLink}>FAQ</Link></li>
            <li><Link href="/zakelijk" className={styles.navLink}>Zakelijk</Link></li>
            <li><Link href="/over-ons" className={styles.navLink}>Over Ons</Link></li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <a href="tel:+31630037257" className={`btn btn-primary ${styles.callBtn}`}>BEL DIRECT</a>
          <Link href="/contact" className={`btn btn-secondary ${styles.contactLink}`}>CONTACT</Link>
        </div>
        
        <div className={styles.mobileHeaderActions}>
          <a href="tel:+31630037257" className={styles.mobileHeaderCallBtn}>
            <Phone size={16} />
            <span>BEL DIRECT</span>
          </a>
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              OnPoint.
            </Link>
            <button 
              className={styles.mobileMenuCloseBtn} 
              onClick={closeMenu}
              aria-label="Sluit menu"
            >
              <X size={32} />
            </button>
          </div>
          <ul className={styles.mobileNavList}>
            <li><Link href="/spoedtransport" className={styles.mobileNavLink} onClick={closeMenu}>Spoedtransport</Link></li>
            <li><Link href="/diensten" className={styles.mobileNavLink} onClick={closeMenu}>Diensten</Link></li>
            <li><Link href="/tarieven" className={styles.mobileNavLink} onClick={closeMenu}>Tarieven</Link></li>
            <li><Link href="/faq" className={styles.mobileNavLink} onClick={closeMenu}>Veelgestelde Vragen (FAQ)</Link></li>
            <li><Link href="/zakelijk" className={styles.mobileNavLink} onClick={closeMenu}>Zakelijk</Link></li>
            <li><Link href="/over-ons" className={styles.mobileNavLink} onClick={closeMenu}>Over Ons</Link></li>
            <li><Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div className={styles.mobileActions}>
            <a href="tel:+31630037257" className={styles.mobileCallBtn}>BEL DIRECT</a>
          </div>
        </div>
      )}
    </header>
  );
}
